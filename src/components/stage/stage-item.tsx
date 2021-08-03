interface StageItemProps {
  bg: string;
}

export function StageItem(props: StageItemProps) {
  return (
    <div className="stage-item" style={{ backgroundImage: `url(${props.bg})`}}>
    </div>
  )
}