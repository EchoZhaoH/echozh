export function HeaderToolbar() {
  return (
    <div className="fixed left-half transform -translate-x-1/2 dark:bg-light-100 rounded-sm z-60">
      <button className="px-4 py-2 dark:text-dark-100">
        <i className="icon-undo dark:text-dark-100" />
      </button>
      <button className="px-4 py-2 dark:text-dark-100">
        <i className="icon-redo dark:text-dark-100" />
      </button>
    </div>
  )
}
