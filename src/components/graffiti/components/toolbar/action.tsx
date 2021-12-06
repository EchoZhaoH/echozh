import { Popover } from "@/components/popover"
import { ActionType } from "../../canvas/types"

export interface ActionToolbarProps {
  onAction: (action: ActionType) => void
}

export function ActionToolbar(props: ActionToolbarProps) {
  const { onAction } = props
  return (
    <div className="fixed left-5 top-half -translate-y-1/2 dark:bg-light-100 rounded-sm not-last:m-2 z-60 p-1">
      <div>
        <button 
          className="w-38px h-38px flex items-center justify-center dark:text-dark-100 border-1 border-gray-100 hover:bg-gray-300 rounded-half"
          onClick={() => onAction(ActionType.PEN)}
        >
          <i className="icon-pen dark:text-dark-100" />
        </button>
      </div>
      <div>
        <Popover
          content="111"
        >
          <button 
            className="w-38px h-38px flex items-center justify-center dark:text-dark-100 border-1 border-gray-100 hover:bg-gray-300 rounded-half"
            onClick={() => onAction(ActionType.NONE)}
          >
            <i className="icon-shape-circle dark:text-dark-100" />
          </button>
        </Popover>
      </div>
    </div>
  )
}
