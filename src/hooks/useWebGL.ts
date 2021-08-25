import { RefObject, useEffect, useState } from "react";

export function useWebGL(ref: RefObject<HTMLCanvasElement>) {
  const [gl, setGl] = useState<WebGLRenderingContext | null>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) {
      return
    }
    const gl = canvas.getContext('webgl')
    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.clearColor(1.0, 1.0, 1.0, 1.0)
    setGl(gl)
  }, [ref])
  return gl
}

