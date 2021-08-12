import { useEffect } from "react";

export function useDark() {
  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => {
      console.log('e: ', e)
      if (!e.matches) {
        return
      }
      window.document.body.classList.add('bp3-dark')
    }
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    if (media.matches) {
      window.document.body.classList.add('bp3-dark')
    }
    media.addEventListener('change', listener);
    return () => {
      media.removeEventListener('change', listener)
    }
  }, [])
}