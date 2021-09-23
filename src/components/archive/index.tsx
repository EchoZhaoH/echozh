import { useGet } from "@/hooks"
import { ArticleOption } from "@/types/article"
import { Classes } from "@blueprintjs/core"
import classNames from "classnames"

export function Archive() {
  const { fetching, data} = useGet<ArticleOption[]>('/articles/list.json', [])
  const skeleton = classNames({ [Classes.SKELETON]: fetching })
  return (
    <div className={skeleton}>
      {data.map(d => (
        <div key={d.id}>{d.title}</div>
      ))}
    </div>
  )
}