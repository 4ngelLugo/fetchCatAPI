import { useEffect, useState } from 'react'
import './App.css'

const FACT_ENDPOINT = 'https://catfact.ninja/fact'

export default function App () {
  const [fact, setFact] = useState()

  useEffect(() => {
    fetch(FACT_ENDPOINT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <>
      <h1>CAT FACT</h1>
      {fact && <p>{fact}</p>}
    </>
  )
}
