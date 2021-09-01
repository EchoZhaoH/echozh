import { flatten, mix, vec3 } from "@/common/mv";
import { createProgram, createShader } from "@/common/shader";
import { useWebGL } from "@/hooks/useWebGL";
import { useEffect, useRef } from "react"
import vertex from './shader.vert'
import frag from './shader.frag'
import { BackEntry } from "@/components/back-entry";

export function Sierpinski() {
  const ref = useRef<HTMLCanvasElement>(null)
  const gl = useWebGL(ref)
  useEffect(() => {
    if (!gl) {
      return
    }
    const pointsCount = 5000;
    function init() {
      const vertices = [
        vec3(-0.5, -0.5, -0.5),
        vec3(0.5, -0.5, -0.5),
        vec3(0.0, 0.5, 0.0),
        vec3(0.0, -0.5, 0.5)
      ]
      const points = [vec3(0.0, 0.0, 0.0)]
      for (let i = 0; points.length < pointsCount; i++) {
        const j = Math.floor(Math.random() * 4)
        points.push(mix(points[i], vertices[j], 0.5))
      }

      // 创建缓冲区
      const buffer = gl.createBuffer()

      // gl.ARRAY_BUFFER 表示是顶点数据，现在绑定 buffer 为当前缓冲区
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

      // 将数据发送到 GPU 缓存
      gl.bufferData(gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW)
    }
    function render() {
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.POINTS, 0, pointsCount)
    }
    function loaderProgram() {
      const program = createProgram(
        gl,
        [
          createShader(gl, vertex, gl.VERTEX_SHADER),
          createShader(gl, frag, gl.FRAGMENT_SHADER)
        ]
      )
      gl.useProgram(program)
      const vPosition = gl.getAttribLocation(program, 'vPosition')
      const size = 3 // 定点属性组成数量，必须是 1，2，3 或者 4
      const type = gl.FLOAT // 数组中每个元素的数据类型
      const normalized = false // 归一化处理
      const stride = 0
      const offset = 0
      gl.vertexAttribPointer(vPosition, size, type, normalized, stride, offset)
      gl.enableVertexAttribArray(vPosition)
    }
    init()
    loaderProgram()
    render()
  }, [gl])
  return (
    <>
      <BackEntry />
      <div>
        <canvas width="500px" height="500px" ref={ref} style={{ backgroundColor: '#fff' }}></canvas>
      </div>
    </>
  )
}