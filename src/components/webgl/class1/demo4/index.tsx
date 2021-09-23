import { flatten, mix, vec3 } from "@/common/mv";
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
    const numTimesDivide = 3
    const points: number[][] = []
    const colors: number[][] = []
    function init() {
      const vertices = [
        vec3(0.0000, 0.0000, -1.0000),
        vec3(0.0000, 0.9428, 0.3333),
        vec3(-0.8165, -0.4714, 0.3333),
        vec3(0.8165, -0.4714, 0.3333)
      ]

      function triangle(a: number[], b: number[], c: number[], color: number) {
        const baseColor = [
          vec3(1.0, 0.0, 0.0),
          vec3(0.0, 1.0, 0.0),
          vec3(0.0, 0.0, 1.0),
          vec3(0.0, 0.0, 0.0)
        ]

        colors.push(baseColor[color])
        points.push(a)
        colors.push(baseColor[color])
        points.push(b)
        colors.push(baseColor[color])
        points.push(c)
      }

      function tetra(a: number[], b: number[], c: number[], d: number[]) {
        triangle(a, c, b, 0)
        triangle(a, c, d, 1)
        triangle(a, b, d, 2)
        triangle(b, c, d, 3)
      }

      function divideTriangle(a: number[], b: number[], c: number[], d: number[], count: number) {
        if (count === 0) {
          tetra(a, b, c, d)
        } else {
          const ab = mix(a, b, 0.5)
          const ac = mix(a, c, 0.5)
          const ad = mix(a, d, 0.5)
          const bc = mix(b, c, 0.5)
          const bd = mix(b, d, 0.5)
          const cd = mix(c, d, 0.5)

          count -= 1

          divideTriangle(a, ab, ac, ad, count)
          divideTriangle(ab, b, bc, bd, count)
          divideTriangle(ac, bc, c, cd, count)
          divideTriangle(ad, bd, cd, d, count)
        }
      }

      divideTriangle(vertices[0], vertices[1], vertices[2], vertices[3], numTimesDivide)

      gl.enable(gl.DEPTH_TEST)
    }
    function render() {
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLES, 0, points.length)
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
      const size = 3 // 定点属性组成数量，必须是 1，2，3 或者 4
      const type = gl.FLOAT // 数组中每个元素的数据类型
      const normalized = false // 归一化处理
      const stride = 0
      const offset = 0

      const cBuffer = gl.createBuffer() // 存储 colors
      // gl.ARRAY_BUFFER 表示是顶点数据，现在绑定 buffer 为当前缓冲区
      gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW)

      const vColor = gl.getAttribLocation(program, 'vColor')
      gl.vertexAttribPointer(vColor, size, type, normalized, stride, offset)
      gl.enableVertexAttribArray(vColor)

      // 创建缓冲区
      const buffer = gl.createBuffer()
      // 将数据发送到 GPU 缓存
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.bufferData(gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW)

      const vPosition = gl.getAttribLocation(program, 'vPosition')
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