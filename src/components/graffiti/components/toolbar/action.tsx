import { ActionType } from "@/components/graffiti/canvas";

export interface ActionToolbarProps {
  onAction: (action: ActionType) => void
}

export function ActionToolbar(props: ActionToolbarProps) {
  const { onAction } = props
  return (
    <div className="fixed left-5 top-half -translate-y-1/2 dark:bg-light-100 rounded-sm not-last:m-2 z-60">
      <div>
        <button 
          className="px-4 py-2 dark:text-dark-100 border-1 border-gray-100"
          onClick={() => onAction(ActionType.PEN)}
        >
          <i className="icon-pen dark:text-dark-100" />
        </button>
      </div>
      <div>
        <button className="px-4 py-2 dark:text-dark-100">
          <i className="icon-redo dark:text-dark-100" />
        </button>
      </div>
    </div>
  )
}
