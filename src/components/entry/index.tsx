import { AnchorButton, Navbar } from '@blueprintjs/core'

export function Entry() {
  return (
    <Navbar>
      <Navbar.Group>
        <Navbar.Heading>
          <AnchorButton text="ECHOZH" href="/" outlined={false} minimal />
        </Navbar.Heading>
        <Navbar.Divider />
        <AnchorButton icon="document" text="文章" outlined={false} minimal href="/" />
        <AnchorButton icon="hand-right" text="瞎搞" outlined={false} minimal href="/#/v-world" />
      </Navbar.Group>
    </Navbar>
  );
}
