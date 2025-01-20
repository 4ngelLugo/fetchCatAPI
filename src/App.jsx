import { useEffect, useState } from 'react'
import './App.css'

const FACT_ENDPOINT = 'https://catfact.ninja/fact'
const CAT_PREFIX_URL = 'https://cataas.com/cat/'

export default function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(FACT_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)

        const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')
        console.log(firstThreeWords)

        fetch(
          `https://cataas.com/cat/says/${firstThreeWords}?fontSize=100&fontColor=red&json=true`
        )
          .then((res) => res.json())
          .then((response) => {
            const { _id } = response
            const url = `${_id}/says/${firstThreeWords}?fontColor=red`

            console.log(url)
            console.log(response)

            setImageUrl(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>CAT FACT</h1>
      {fact && <p>{fact}</p>}
      <div>
        {imageUrl && (
          <img
            src={`${CAT_PREFIX_URL}${imageUrl}`}
            alt='imagen de un gato con las tres primeras palabras del hecho'
          />
        )}
      </div>
    </main>
  )
}
