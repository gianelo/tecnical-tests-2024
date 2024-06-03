import { useCallback, useMemo, useRef, useState } from 'react'
// import withResults from '../mocks/with-result.json'
// import withOutResult from '../mocks/not-result.json'
import { searchMovies } from '../services/searchMovies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const previewSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previewSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previewSearch.current = search
      const newMovies = await searchMovies({ search })

      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading, error }
}
