import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export default function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>CAT FACT</h1>
      {fact && <p>{fact}</p>}
      <div>
        {imageUrl && (
          <img
            src={imageUrl}
            alt='imagen de un gato con las tres primeras palabras del hecho'
          />
        )}
      </div>
      <button onClick={handleClick}>Get a new fact</button>
    </main>
  )
}
