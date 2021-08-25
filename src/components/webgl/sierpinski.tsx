import { add, flatten, scale, vec2 } from "@/common/mv";
import { createProgram, createShader } from "@/common/shader";
import { useWebGL } from "@/hooks/useWebGL";
import { useEffect, useRef } from "react"
import vertex from './shader.vert'
import frag from './shader.frag'

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
        vec2(-1.0, -1.0),
        vec2(0.0, 1.0),
        vec2(1.0, -1.0)
      ]
      const u = scale(0.5, add(vertices[0], vertices[1]))
      const v = scale(0.5, add(vertices[0], vertices[2]))
      let p = scale(0.5, add(u, v))
      const points = [p]
      for (let i = 1; i <= pointsCount; i++) {
        const j = Math.floor(Math.random() * 3)
        p = scale(0.5, add(points[i - 1], vertices[j]))
        points.push(p)
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
      gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0)
      gl.enableVertexAttribArray(vPosition)
    }
    init()
    loaderProgram()
    render()
  }, [gl])
  return (
    <div>
      <canvas width="500px" height="500px" ref={ref} style={{backgroundColor: '#fff'}}></canvas>
    </div>
  )
}