function CardBox({data}) {

  return (
    <div className="bg-slate-200 dark:bg-slate-800 text-amber-600 dark:text-amber-200 px-4 grid grid-cols-auto justify-center gap-2">
    {
            data.map((e, idx) =>
            (
                <div key={idx} className="p-6 bg-indigo-200 dark:bg-teal-800 rounded-lg text-amber-600 dark:text-slate-50 drop-shadow-md">
                    {e}
                </div>
            )
        )
    }
    </div>
  )
}

export default CardBox