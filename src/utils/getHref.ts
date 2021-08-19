import { generatePath } from 'react-router-dom';
import { ExtractRouteParams } from 'react-router'
import * as H from 'history'

export function getHref(history: H.History, path: string, params?: ExtractRouteParams<string>) {
  const link = history.createHref({
    pathname: generatePath(path, params)
  })
  return link
}