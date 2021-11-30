import { useEffect, useRef, MouseEvent } from "react"
import Konva from 'konva'
// import { useKonvaStage } from "./hooks"

export function Graffiti() {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!ref.current) {
      return
    }
    const stage = new Konva.Stage({
      container: ref.current,
      width: window.innerWidth,
      height: window.innerHeight
    })
    const layer = new Konva.Layer()
    const pen = new Konva.Line({
      points: [0,0],
      fill: 'red',
      stroke: 'red',
      strokeWidth: 2,
      draggable: true
    })
    const draw = (e: MouseEvent) => {
      const {
        clientX,
        clientY
      } = e
      pen.points(pen.points().concat([clientX, clientY]))
      pen.draw()
      layer.batchDraw()
      stage.batchDraw()
    }
    stage.addEventListener('mousemove', draw as any)
    layer.add(pen)
    stage.add(layer)
  }, [ref])
  return (
    <div ref={(refEl) => ref.current = refEl}></div>
  )
}
