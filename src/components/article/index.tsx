import { request } from "@/api"
import { useEffect, useState } from "react"

export function Article() {
  const [ data, setData ] = useState<string>('')
  useEffect(() => {
    request('/articles/hello.json').then(res => {
      if (!res) {
        return
      }
      setData((res as any).data)
    })
  }, [])
  return (
    <div dangerouslySetInnerHTML={{ __html: data }}></div>
  )
}