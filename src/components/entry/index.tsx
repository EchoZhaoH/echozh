import { request } from '@/api';
import { getHref } from '@/utils/getHref';
import { AnchorButton, Navbar } from '@blueprintjs/core'
import { Article } from '@components/article'
import { Film } from '@components/film'
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './style.scss'

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
    <div className="content">
      <Film />
    </div>
  );
}
