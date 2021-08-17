import { useEffect, useState } from "react"

export function Article() {
  const [ data, setData ] = useState<string>('')
  useEffect(() => {
    fetch('/articles/hello.json').then(res => {
      console.log(res)
    })
  }, [])
  return (
    <div dangerouslySetInnerHTML={{ __html: data}}></div>
  )
}