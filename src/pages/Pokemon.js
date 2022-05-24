import React from 'react'
import PokemonAvatar from '../components/PokemonAvatar'
import TopTitleBar from '../components/TopTitleBar'

function Pokemon() {
  return (
    <>
        <TopTitleBar />
        <PokemonAvatar src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"} name={'Bulbasaur'}/>
    </>
  )
}

export default Pokemon