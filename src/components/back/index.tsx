import { Link } from 'react-router-dom'

interface BackProps {
  url?: string;
}

export function Back(props: BackProps) {
  const {
    url = '/'
  } = props

  return (
    <Link to={url}>
      cd ..
    </Link>
  )
}