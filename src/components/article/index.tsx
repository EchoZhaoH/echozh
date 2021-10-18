import { RouterProps } from "react-router-dom"
import { ArticleOption } from "@/types/article"
import { Classes, H4, Intent, Tag } from "@blueprintjs/core"
import { useGet } from "@/hooks"
import classNames from "classnames"

interface ArticleProps extends RouterProps {
  id: string;
}

export function Article(props: ArticleProps) {
  const { fetching, data } = useGet<ArticleOption>(`/articles/${props.id}.json`, {} as ArticleOption)
  const skeleton = classNames({ [Classes.SKELETON]: fetching })
  return (
    <div className="article-container mgt-l">
      <H4 className={skeleton}>
        {data.title}
      </H4>
      <div className={classNames(skeleton, 'mgt-s')}>
        {!!data.tag && <Tag className="mgr-s" round intent={Intent.PRIMARY}>{data.tag}</Tag>}
        <span>{data.date}</span>
      </div>
      <article className={classNames(skeleton, 'mgt-l')} dangerouslySetInnerHTML={{ __html: data.body }}></article>
    </div>
  )
}
