import { useEffect, useRef } from "react"
import { GraffitiBoard } from "./canvas"
import { ActionToolbar, HeaderToolbar } from "./components/toolbar"

export function Graffiti() {
  const ref = useRef<HTMLDivElement | null>(null)
  const stage = useRef<GraffitiBoard | null>(null)
  useEffect(() => {
    if (!ref.current) {
      return
    }
    stage.current = new GraffitiBoard(ref.current, {
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [ref])
  return (
    <div>
      <HeaderToolbar />
      <ActionToolbar 
        onAction={(action) => {
          if (!stage.current) {
            return
          }
          stage.current.setAction(action);
        }}
      />
      <div ref={(refEl) => ref.current = refEl}></div>
    </div>
  )
}
