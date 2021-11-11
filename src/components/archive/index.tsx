import { useGet } from "@/hooks"
import { ArticleOption } from "@/types/article"
import { Back } from '@components/back'
import { ArticleItem } from './item'

import "./style.scss"

export function Archive() {
  const { data} = useGet<ArticleOption[]>('/articles/list.json', [])
  return (
    <div className="py-4 mx-auto sm:w-screen-sm">
      {data.map(d => (
        <ArticleItem data={d} key={d.id} />
      ))}
      <Back />
    </div>
  )
}