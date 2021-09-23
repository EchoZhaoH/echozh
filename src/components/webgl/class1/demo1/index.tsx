import { flatten, mix, vec2 } from "@/common/mv";
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
    const numTimesDivide = 5
    const pointsCount = Math.pow(3, numTimesDivide + 1);
    function init() {
      const vertices = [
        vec2(-1.0, -1.0),
        vec2(0.0, 1.0),
        vec2(1.0, -1.0)
      ]
      const points: number[][] = []

      function triangle(a: number[], b: number[], c: number[]) {
        points.push(a);
        points.push(b)
        points.push(c)
      }

      function divideTriangle(a: number[], b: number[], c: number[], count: number) {
        if (count === 0) {
          triangle(a, b, c)
        } else {
          const ab = mix(a, b, 0.5)
          const ac = mix(a, c, 0.5)
          const bc = mix(b, c, 0.5)

          count -= 1

          divideTriangle(a, ab, ac, count)
          divideTriangle(c, ac, bc, count)
          divideTriangle(b, bc, ab, count)
        }
      }

      divideTriangle(vertices[0], vertices[1], vertices[2], numTimesDivide)
      // 创建缓冲区
      const buffer = gl.createBuffer()

      // gl.ARRAY_BUFFER 表示是顶点数据，现在绑定 buffer 为当前缓冲区
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

      // 将数据发送到 GPU 缓存
      gl.bufferData(gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW)
    }
    function render() {
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLES, 0, pointsCount)
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
      const size = 2 // 定点属性组成数量，必须是 1，2，3 或者 4
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
    <div>
      <canvas width="500px" height="500px" ref={ref} style={{ backgroundColor: '#fff' }}></canvas>
    </div>
  )
}