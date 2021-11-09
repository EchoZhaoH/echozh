import { useRef } from "react"

export function Avatar() {
  const ref = useRef<HTMLCanvasElement | null>(null)
  return (
    <div>
      <canvas ref={ref}/>
    </div>
  )
}