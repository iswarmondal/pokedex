import React from 'react'
import PokemonAvatar from '../components/PokemonAvatar'

function Pokemon(props) {
  return (
    <div className='relative flex flex-col items-center'>
        <PokemonAvatar src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"} name={'Bulbasaur'}/>
        <section className='z-10 absolute top-[34vh] bg-slate-50 p-4 pokemon-info overflow-x-hidden'>
          {JSON.stringify(props.pokemonData)}
        </section>
    </div>
  )
}

export default Pokemon