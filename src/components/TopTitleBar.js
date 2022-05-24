import {GoChevronLeft, GoKebabVertical} from 'react-icons/go'

function TopTitleBar(props) {

    return (
            <header>
                <nav className='bg-slate-400 dark:bg-slate-900 p-4 flex justify-between items-center drop-shadow-md'>

                    <GoChevronLeft color='white' />
                    <GoKebabVertical color='white' />

                </nav>

                {props.children ? 
                    <div className='px-4 py-2 bg-slate-100 dark:bg-slate-800 text-amber-600 dark:text-amber-200 font-semibold'>
                        <h4 className="text-2xl">{props.children}</h4>
                    </div>
                : <div></div>}

            </header>
    )
}

export default TopTitleBar