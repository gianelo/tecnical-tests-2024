const GET_MOVIES_URL = 'https://www.omdbapi.com'
const API_KEY = 'a08d7ffe'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`${GET_MOVIES_URL}/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
