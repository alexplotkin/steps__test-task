import { useEffect, useRef } from 'react'

const _useDidUpdate = (fn, conditions) => {
  const didMountRef = useRef(false)
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true
      return
    }

    // Cleanup effects when f returns a function
    return fn && fn()
  }, conditions)
}

export default _useDidUpdate
