import { useEffect } from 'react'

const _useWillUnmount = (fn) => useEffect(() => () => fn && fn(), [])

export default _useWillUnmount
