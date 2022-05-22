import {GoChevronLeft, GoKebabVertical} from 'react-icons/go'

function TopTitleBar(props) {

    var iconColor = ''
    if (props.theme == 'dark') {
        iconColor='white'
    }else if(props.theme == 'light'){
        iconColor = 'black'
    }else{
        iconColor = 'black'
    }

    return (
            <>
                <nav className='bg-slate-300 dark:bg-slate-900 p-4 flex justify-between items-center drop-shadow-md'>

                    <GoChevronLeft color={iconColor} />
                    <GoKebabVertical color={iconColor} />

                </nav>

                <div className='px-4 py-2 bg-slate-200 dark:bg-slate-800 text-amber-600 dark:text-amber-200 font-semibold'>
                    <h4>{props.children}</h4>
                </div>

            </>
    )
}

export default TopTitleBar