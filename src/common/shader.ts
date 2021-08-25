export function createShader(gl: WebGLRenderingContext, source: string, type: GLenum) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw Error(`shader ${type} create failed, the error log is: ${gl.getShaderInfoLog(shader)}`)
  }
  return shader
}

export function createProgram(gl: WebGLRenderingContext, shaders: WebGLShader[]) {
  const program = gl.createProgram()
  shaders.forEach(s => {
    gl.attachShader(program, s)
  })
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw Error(`shader program failed to link, the error log is: ${gl.getProgramInfoLog(program)}`)
  }
  return program
}
