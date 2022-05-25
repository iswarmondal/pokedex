function PokemonAvatar(props) {
    return (
        <div className="fixed z-0 w-full">
            <section className="bg-gradient-to-b from-teal-600 to-indigo-400 flex flex-col justify-center items-center pb-7">

                <h2 className='text-2xl font-bold text-slate-100 ml-4 pt-3'>{props.name}</h2>
                <img src={props.src} alt="" className='w-40' />

            </section>
            <div className="curved-devider bg-indigo-400"></div>
        </div>
    )
}

export default PokemonAvatar