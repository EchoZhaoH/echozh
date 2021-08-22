import { Button, Icon } from "@blueprintjs/core";
import { Link } from 'react-router-dom'

import "./style.scss"

export function BackEntry () {
  return (
    <div className="back-entry">
      <Link to="/">
        <Button>
          <Icon icon="undo" />
        </Button>
      </Link>
    </div>
  )
}