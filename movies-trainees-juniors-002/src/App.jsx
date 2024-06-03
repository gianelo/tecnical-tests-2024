import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounced from 'just-debounce-it'

export function App () {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounced(search => {
      getMovies({ search })
    }, 300)
    , [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)

    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h2>🍿MoviesDash</h2>
        <section className='search-section'>
          <form className='form' onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={search} name='query' placeholder='Star wars, Dune, The planet of the apes...' />
            <input type='checkbox' onChange={handleSort} checked={sort} />
            <button type='submit'>Search</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </section>
      </header>

      <main>
        {
        loading
          ? <p>Cargando...</p>
          : <Movies movies={movies} />
         }
      </main>
    </div>
  )
}
