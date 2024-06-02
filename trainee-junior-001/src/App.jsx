import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { catImageUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Hello World form App.jsx</h1>
      <section>
        {fact && <p>{fact}</p>}
        {catImageUrl && <img src={catImageUrl} alt={`This is image is comming from this token ID ${catImageUrl}`} />}
      </section>
      <button onClick={handleClick}>Change Image</button>
    </main>
  )
}
