import TopTitleBar from '../components/TopTitleBar';
import { BsSearch } from "react-icons/bs";
import {useState} from 'react'

function Search() {

  const [replaceElement, setReplaceElement] = useState(false);

  const clickHandler = () => {
    setReplaceElement(true);
    let searchDiv = document.querySelector('.search-box-div');
    searchDiv.classList.add('search-box-div-animation');
  }

  return (
    <div className="min-h-screen bg-slate-700">
      <TopTitleBar />

      <section className='min-h-[90vh] flex items-center justify-center relative'>

        <div className='w-1/4 bg-slate-800 flex flex-col justify-between search-box-div items-center p-4 rounded-md shadow shadow-slate-600/50 drop-shadow-md absolute top-2/4 cursor-pointer' onClick={clickHandler}>

          {
            replaceElement ? 
              <input className='w-full p-2 rounded-md' type='text' placeholder='Search' /> 
            : 
              <>
                <BsSearch size={25} color={'white'}/>

                <p className='text-slate-200 text-sm font-semibold text-center mt-2'>Search Pokemons</p>
              </>
          }

        </div>

      </section>
    </div>
  )
}

export default Search