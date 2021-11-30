import { useState } from 'react';
import { useEffect } from 'react';
import * as React from 'react';
import Konva from 'konva'
import type { StageConfig } from 'konva/lib/Stage'

export function useKonvaStage(ref: React.RefObject<HTMLDivElement>, options: Omit<StageConfig, 'container'>) {
  const [ stage, setStage ] = useState<Konva.Stage | undefined>()
  useEffect(() => {
    if (!ref.current) {
      return
    }
    const stage = new Konva.Stage({
      container: ref.current,
      ...options
    })
    setStage(stage)
  }, [ref, options])
  return stage
}
