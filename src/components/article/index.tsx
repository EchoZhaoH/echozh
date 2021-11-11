import { RouterProps } from "react-router-dom"
import { ArticleOption } from "@/types/article"
import { useGet } from "@/hooks"
import classNames from "classnames"
import { Back } from '@components/back'

interface ArticleProps extends RouterProps {
  id: string;
}

export function Article(props: ArticleProps) {
  const { data } = useGet<ArticleOption>(`/articles/${props.id}.json`, {} as ArticleOption)
  return (
    <div className="py-4 mx-auto sm:w-screen-sm">
      <h4 className="text-lg">
        {data.title}
      </h4>
      <div className={classNames('mgt-s')}>
        {!!data.tag && <span className="mgr-s">{data.tag}</span>}
        <span>{data.date}</span>
      </div>
      <article className={classNames('mgt-l')} dangerouslySetInnerHTML={{ __html: data.body }}></article>
      <Back url="/articles" />
    </div>
  )
}
