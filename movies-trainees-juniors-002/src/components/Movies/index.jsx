import { CardMovie } from './CardMovie'
import { MovieNotFound } from './MovieNotFound'

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? (
        <ul className='movies'>
          {
                movies.map(movie => {
                  return (
                    <CardMovie
                      key={movie.id}
                      title={movie.title}
                      year={movie.year}
                      poster={movie.poster}
                    />
                  )
                })
            }
        </ul>
        )
      : <MovieNotFound />
  )
}
