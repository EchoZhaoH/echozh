import { request } from "@/api";
import { useEffect, useState } from "react";

export function useGet<T>(url: string, initData: T, opts?: RequestInit) {
  const [ loading, setLoading ] = useState<boolean>(false)
  const [data, setData] = useState<T>(initData)
  useEffect(() => {
    setLoading(true)
    request<T>(url, opts).then((res: T) => {
      setData(res)
    }).finally(() => {
      setLoading(false)
    })
  }, [url, opts])
  return {
    fetching: loading,
    data
  }
}