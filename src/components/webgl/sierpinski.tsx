import { add, scale, vec2 } from "@/common/mv";
import { useEffect } from "react"

export function Sierpinski() {
  useEffect(() => {
    const pointsCount = 5000;
    const vertices = [
      vec2(-1.0, -1.0),
      vec2(0.0, 1.0),
      vec2(1.0, -1.0)
    ]
    const u = scale(0.5, add(vertices[0], vertices[1]))
    const v = scale(0.5, add(vertices[0], vertices[2]))
    let p = scale(0.5, add(u, v))
    const points = [ p ]
    for (let i = 1; i <= pointsCount; i++) {
      const j = Math.floor(Math.random()*3)
      p = scale(0.5, add(points[i - 1], vertices[j]))
      points.push(p)
    }
  }, [])
  return (
    <div></div>
  )
}