import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('The search can not be empty')
      return
    }

    if (search.length < 3) {
      setError('The search most be at least 3 characters')
      return
    }

    setError(null)
  }, [search])

  return { search, error, updateSearch }
}
