import { vec2 } from "@/common/mv";
import { useEffect } from "react"

export function Sierpinski() {
  useEffect(() => {
    const pointsCount = 5000;
    const vertices = [
      vec2(-1.0, -1.0),
      vec2(0.0, 1.0),
      vec2(1.0, -1.0)
    ]
    console.log(vertices)
  }, [])
  return (
    <div></div>
  )
}