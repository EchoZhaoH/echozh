import classNames from 'classnames'
import { Link } from 'react-router-dom'

interface BackProps {
  url?: string;
  className?: string;
}

export function Back(props: BackProps) {
  const {
    url = '/',
    className
  } = props
  const cns = classNames(className, 'mt-10', 'inline-block')
  return (
    <Link to={url} className={cns}>
      cd ..
    </Link>
  )
}