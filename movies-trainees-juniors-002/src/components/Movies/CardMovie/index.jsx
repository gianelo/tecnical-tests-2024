export function CardMovie ({ title, year, poster }) {
  return (
    <li className='movie'>
      <h4>{title}</h4>
      <p>{year}</p>
      <img src={poster} alt={`This is the movie poster: ${title}-${year}`} />
    </li>
  )
}
