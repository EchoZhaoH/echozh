import { useEffect } from 'react';
import { generatePath, useHistory } from 'react-router-dom';
import { ExtractRouteParams } from 'react-router'
import { useState } from 'react';

export function useHref(path: string, params?: ExtractRouteParams<string>) {
  const [href, setHref] = useState<string>('')
  const history = useHistory()
  const link = history.createHref({
    pathname: href
  })
  useEffect(() => {
    setHref(generatePath(path, params))
  }, [path, params])
  return `/echozh/${link}`
}