import { AnchorButton, Navbar } from '@blueprintjs/core'
import { generatePath, RouterProps } from 'react-router-dom';

export function Entry(props: RouterProps) {
  const { history } = props
  const rootHref = history.createHref({
    pathname: generatePath('/')
  })
  return (
    <Navbar>
      <Navbar.Group>
        <Navbar.Heading>
          <AnchorButton text="ECHOZH" href={rootHref} outlined={false} minimal />
        </Navbar.Heading>
        <Navbar.Divider />
        <AnchorButton
          icon="document"
          text="文章"
          outlined={false}
          minimal
          href={rootHref}
        />
        <AnchorButton
          icon="hand-right"
          text="瞎搞"
          outlined={false}
          minimal
          href={history.createHref({
            pathname: generatePath('/v-world')
          })}
        />
      </Navbar.Group>
    </Navbar>
  );
}
