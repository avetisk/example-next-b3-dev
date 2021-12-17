import useApi from "../src/components/hooks/useApi"
import Page from "../src/components/Page"

const IndexPage = () => {
  const data = useApi("https://randomuser.me/api/")
  const dataPokemon = useApi("https://pokeapi.co/api/v2/pokemon/pikachu")

  if (!data || !dataPokemon) {
    return "Loading..."
  }

  const {
    results: [user],
  } = data
  const { weight } = dataPokemon

  return (
    <Page>
      <h1>HOME</h1>
      <p>First name: {user.name.first}</p>
      <p>Last name: {user.name.last}</p>
      <p>Weight: {weight}</p>
    </Page>
  )
}

export default IndexPage
