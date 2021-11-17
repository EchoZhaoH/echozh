import { useEffect } from 'react';
export enum Mode {
  DARK,
  LIGHT
}

export function useModeSwitch() {
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.add('light')
    }
  }, [])
}

