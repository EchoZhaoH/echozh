import { useGet } from "@/hooks"
import { ArticleOption } from "@/types/article"
import { Link } from "react-router-dom"
import { Back } from '@components/back'

import "./style.scss"

export function Archive() {
  const { data} = useGet<ArticleOption[]>('/articles/list.json', [])
  return (
    <>
      <div>
        {data.map(d => (
          <div key={d.id} className="article-item">
            <Link to={`/articles/${d.id}`}>
              <h5>{d.title}</h5>
            </Link>
            <div className="mgb-s">{d.date}<span className="mgl-s">{d.tag}</span></div>
            <article>{d.body}</article>
          </div>
        ))}
      </div>
      <Back />
    </>
  )
}