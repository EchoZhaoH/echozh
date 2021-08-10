import { Link } from 'react-router-dom'
interface StageItemProps {
  bg: string;
  topBgColor?: string;
  bottomBgColor?: string;
  topText?: string;
  bottomText?: string;
}

export function StageItem(props: StageItemProps) {
  return (
    <div className="stage-item" style={{ backgroundImage: `url(${props.bg})`}}>
      <div className="stage-top" style={{ backgroundColor: props.topBgColor }}>
        <button>{props.topText || '看看'}</button>
      </div>
      <div className="stage-bottom" style={{ backgroundColor: props.bottomBgColor }}>
        <button>
          <Link to="/v-world" >{props.bottomText || '进入里世界'}</Link>
        </button>
      </div>
    </div>
  )
}