import { useHref } from '@/hooks/useHref';
import { AnchorButton, Navbar } from '@blueprintjs/core'
import { Article } from '@components/article'

export function Entry() {
  const rootHref = useHref('/')
  const vWorldHref = useHref('/v-world')
  return (
    <>
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
            href={vWorldHref}
          />
        </Navbar.Group>
      </Navbar>
      <Article />
    </>
  );
}
