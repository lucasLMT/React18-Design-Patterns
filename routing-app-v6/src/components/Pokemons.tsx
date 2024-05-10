import { useLoaderData, useNavigation } from 'react-router-dom'

type PokeData = {
  name: string
  url: string
}

const Pokemons = () => {
  const pokemons = useLoaderData() as PokeData[]
  const navigation = useNavigation()
  if (navigation.state === 'loading') {
    return <h1>Loading...</h1>
  }
  const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  return (
    <div className="Home">
      <h1>Pokemons</h1>
      {pokemons.map((pokemon, index) => (
        <div key={pokemon.name}>
          <h2>
            {index + 1}. {pokemon.name}
          </h2>
          <img src={`${imgUrl}/${pokemon.url.split('/').slice(-2)[0]}.png`} alt={pokemon.name} />
          <p>
            <a href={pokemon.url} target="_blank" rel="noreferrer">
              See details
            </a>
          </p>
        </div>
      ))}
    </div>
  )
}

export const dataLoader = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export default Pokemons
