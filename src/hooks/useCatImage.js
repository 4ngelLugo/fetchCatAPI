import { useState, useEffect } from 'react'

const CAT_PREFIX_URL = 'https://cataas.com/cat/'

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')
    console.log(firstThreeWords)

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?fontSize=100&fontColor=red&json=true`)
      .then((res) => res.json())
      .then((response) => {
        const { _id } = response
        const url = `${_id}/says/${firstThreeWords}?fontColor=red`

        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_URL}${imageUrl}` }
}
