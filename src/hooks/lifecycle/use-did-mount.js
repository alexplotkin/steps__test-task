import { useEffect } from 'react'

const _useDidMount = (fn) => useEffect(() => fn && fn(), [])

export default _useDidMount
