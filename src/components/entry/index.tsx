import { AnchorButton, Navbar } from '@blueprintjs/core'
import { generatePath } from 'react-router-dom';

export function Entry() {
  return (
    <Navbar>
      <Navbar.Group>
        <Navbar.Heading>
          <AnchorButton text="ECHOZH" href={generatePath('/')} outlined={false} minimal />
        </Navbar.Heading>
        <Navbar.Divider />
        <AnchorButton icon="document" text="文章" outlined={false} minimal href={generatePath('/')} />
        <AnchorButton icon="hand-right" text="瞎搞" outlined={false} minimal href={generatePath('/#/v-world')} />
      </Navbar.Group>
    </Navbar>
  );
}
