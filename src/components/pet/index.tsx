import { useLiveWidget } from "@/hooks/usePat"
import classNames from "classnames"
import { useRef } from "react"

interface Props {
  className?: string;
}

export function Pet(props: Props) {
  const {
    className
  } = props
  const ref = useRef<HTMLCanvasElement | null>(null)
  const cns = classNames("mx-auto rounded-1/2", className)
  useLiveWidget(ref, {
    width: 200,
    height: 200,
    backgroundColor: 0x4e4c4c
  })
  return (
    <canvas ref={ref} className={cns} />
  )
}