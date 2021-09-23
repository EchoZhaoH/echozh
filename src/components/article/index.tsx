import { RouterProps } from "react-router-dom"
import { ArticleOption } from "@/types/article"
import { Classes, H1, Tag } from "@blueprintjs/core"
import { useGet } from "@/hooks"
import classNames from "classnames"

interface ArticleProps extends RouterProps {
  id: string;
}

export function Article(props: ArticleProps) {
  const { fetching, data } = useGet<ArticleOption>(`/articles/${props.id}.json`, {} as ArticleOption)
  const skeleton = classNames({ [Classes.SKELETON]: fetching })
  return (
    <div className="container-bg">
      <H1 className={skeleton}>
        {data.title}
      </H1>
      <div className={skeleton}>
        {!!data.tag && <Tag className="mgr-s">{data.tag}</Tag>}
        <span>{data.date}</span>
      </div>
      <article className={classNames(skeleton, 'mgt-l')} dangerouslySetInnerHTML={{ __html: data.body }}></article>
    </div>
  )
}
