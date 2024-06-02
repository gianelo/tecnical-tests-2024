import { ENDPOINT_CAT_IMAGE_ID, ENDPOINT_RANDOM_FACT, ENDPOINT_CAT_IMAGE } from '../Contanst'

export const getNewFact = async () => {
  const res = await fetch(ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getCatImageUrl = async ({ words }) => {
  const res = await fetch(`${ENDPOINT_CAT_IMAGE_ID}/${words}?json=true`)
  const data = await res.json()
  const { _id } = data
  return `${ENDPOINT_CAT_IMAGE}/${_id}`
}
