import { useGet } from "@/hooks"
import { ArticleOption } from "@/types/article"
import { Card, Classes, H5, Intent, Tag } from "@blueprintjs/core"
import classNames from "classnames"
import { Link } from "react-router-dom"

import "./style.scss"

export function Archive() {
  const { fetching, data} = useGet<ArticleOption[]>('/articles/list.json', [])
  const skeleton = classNames({ [Classes.SKELETON]: fetching })
  return (
    <div className={skeleton}>
      {data.map(d => (
        <Card interactive key={d.id} className="article-item">
          <Link to={`/articles/${d.id}`}>
            <H5>{d.title}</H5>
          </Link>
          <div className="mgb-s">{d.date}<Tag className="mgl-s" round intent={Intent.PRIMARY}>{d.tag}</Tag></div>
          <article>{d.body}</article>
        </Card>
      ))}
    </div>
  )
}