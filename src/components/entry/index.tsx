import { request } from '@/api';
import { getHref } from '@/utils/getHref';
import { AnchorButton, Navbar } from '@blueprintjs/core'
import { Article } from '@components/article'
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

interface Article { id: string; title: string; date: string }

export function Entry() {
  const history = useHistory()
  const rootHref = getHref(history, '/')
  const vWorldHref = getHref(history, '/v-world')
  const [list, setList] = useState<Article[]>([])
  useEffect(() => {
    request<Article[]>('/articles/list.json').then(res => {
      setList(res || [])
    })
  }, [])
  return (
    <div className="container-bg">
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
      <div>
        {list.map(l => (
          <div key={l.id}>
            <h3><Link to={`/articles/${l.id}`}>{l.title}</Link></h3>
            <p>{l.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
