function CardBox({data}) {

  return (
    <div className="bg-slate-100 dark:bg-slate-800 text-amber-600 dark:text-amber-200 px-4 grid grid-cols-auto justify-center gap-4 grow">
    {
            data.map((e, idx) =>
            (
                <div key={idx} className="p-6 h-40 bg-indigo-300 dark:bg-indigo-900 rounded-lg text-amber-100 dark:text-slate-50 drop-shadow-md shadow-md dark:shadow-slate-700 border border-slate-400 dark:border-slate-600">
                    {e}
                </div>
            )
        )
    }
    </div>
  )
}

export default CardBox