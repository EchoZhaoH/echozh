import { Link } from 'react-router-dom'

export function Header() {
  return (
    <div className="flex flex-row px-10 mt-10">
      <Link to="/">
        Echo
      </Link>
      <span className="flex-1"></span>
      <Link to="/articles">
        随想
      </Link>
      <Link to="/webgl" className="ml-4">
         WebGl
      </Link>
    </div>
  )
}
