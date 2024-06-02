import { useEffect, useState } from 'react'
import { getNewFact } from '../services/fetchFunctions'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getNewFact().then(fact => setFact(fact))
  }
  // get the fact when page reload
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
