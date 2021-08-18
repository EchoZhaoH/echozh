export function request<T>(input: RequestInfo, option?: RequestInit) {
  return fetch(input, option).then(res => {
    const status = res.status
    if (status === 200 && res.ok) {
      return res.json() as Promise<T>
    } else {
      throw Error('request error')
    }
  }).catch(e => {
    console.log(e.message)
  })
}
