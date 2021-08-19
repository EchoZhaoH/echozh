import { request } from "@/api"
import { useEffect, useState } from "react"
import { RouterProps } from "react-router-dom"

interface ArticleProps extends RouterProps {
  id: string;
}

export function Article(props: ArticleProps) {
  const [ data, setData ] = useState<string>('')
  console.log(props)
  useEffect(() => {
    request(`/articles/${props.id}.json`).then(res => {
      if (!res) {
        return
      }
      setData((res as any).data)
    })
  }, [props.id])
  return (
    <div dangerouslySetInnerHTML={{ __html: data }} className="container-bg"></div>
  )
}