import stage1 from '@assets/images/stage-1.jpeg'
import stage2 from '@assets/images/stage-2.jpeg'
import stage3 from '@assets/images/stage-3.jpeg'

import { StageItem } from './stage-item'

import "./style.scss"

export function Stage() {
  return (
    <div className="stage">
      <StageItem 
        bg={stage1} 
        topBgColor="rgba(195, 214, 223, 0.5)"
        bottomBgColor="rgba(92, 121, 94, 0.5)"
        topText="我是谁"
      />
      <StageItem
        bg={stage2}
        topBgColor="rgba(186, 228, 249, 0.5)"
        bottomBgColor="rgba(126, 107, 66, 0.5)"
        topText="我的记录"
      />
      <StageItem
        bg={stage3}
        topBgColor="rgba(231, 217, 201, 0.5)"
        bottomBgColor="rgba(105, 148, 177, 0.5)"
        topText="我的瞎想"
      />
    </div>
  )
}
