import { useEffect, useState } from 'react'
import { getCatImageUrl } from '../services/fetchFunctions'

export function useCatImage ({ fact }) {
  const [catImageUrl, setcatImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')

    getCatImageUrl({ firstThreeWords }).then(url => setcatImageUrl(url))
  }, [fact])

  return { catImageUrl }
}
