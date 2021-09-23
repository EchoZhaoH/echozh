import { Link } from 'react-router-dom'
import { Alignment, Button, Navbar } from "@blueprintjs/core";

export function Header() {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>
          <Link to="/">Echo</Link>
        </Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Button className="mgr-l" minimal icon="archive">
          <Link to="/articles">Archive</Link>
        </Button>
        <Button minimal icon="lab-test">
          <Link to="/webgl">
            WEBGL
          </Link>
        </Button>
      </Navbar.Group>
    </Navbar>
  )
}
