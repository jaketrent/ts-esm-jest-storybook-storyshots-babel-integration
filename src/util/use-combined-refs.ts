import { RefObject, RefCallback, useEffect, useRef } from 'react'

import { isCallbackRef, isRef } from './is-ref'

type RefArg<El extends HTMLElement> =
  | RefCallback<El>
  | RefObject<El>
  | React.ForwardedRef<El>

export const useCombinedRefs = <El extends HTMLElement>(
  ...refs: RefArg<El>[]
) => {
  const targetRef = useRef<El>(null)

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return

      if (isCallbackRef<El>(ref)) {
        ref(targetRef.current)
      } else if (isRef<El>(ref) && targetRef.current) {
        // @ts-ignore: works in DS
        ref.current = targetRef.current
      }
    })
  }, [refs])

  return targetRef
}
