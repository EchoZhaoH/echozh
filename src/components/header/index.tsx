import { Link } from 'react-router-dom'
import github from '@assets/svg/github.svg';
import { githubSrc } from '@/data';

export function Header() {
  return (
    <div className="flex flex-row px-10 mt-10">
      <Link to="/">
        Echo
      </Link>
      <a href={githubSrc} title="github" className="ml-4">
        <img src={github} alt="github" />
      </a>
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
