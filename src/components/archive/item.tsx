import { ArticleOption } from "@/types/article";
import { Link } from "react-router-dom"

interface Props {
  data: ArticleOption;
}
export function ArticleItem(props: Props) {
  const {
    data
  } = props
  return (
    <section className="not-last:mt-5">
      <Link to={`articles/${data.id}`} className="inline-block text-lg"><h3>{data.title}</h3></Link>
      <p className="mt-2 text-gray-500"><span>{data.date}</span>{data.tag && <sup className="ml-2 px-1 rounded-sm border border-gray-500">{data.tag}</sup>}</p>
      <p className="mt-2 text-gray-500">{data.body}</p>
    </section>
  )
}