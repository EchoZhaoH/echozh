import stage1 from '@assets/images/stage-1.jpeg'
import stage2 from '@assets/images/stage-2.jpeg'
import stage3 from '@assets/images/stage-3.jpeg'

import { StageItem } from './stage-item'

import "./style.scss"

export function Stage() {
  return (
    <div className="stage">
      <StageItem bg={stage1} />
      <StageItem bg={stage2} />
      <StageItem bg={stage3} />
    </div>
  )
}
