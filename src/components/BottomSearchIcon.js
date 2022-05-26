import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

function BottomSearchIcon() {
  return (
    <Link to={"/search"}>
      <div className='fixed bottom-4 right-7 bg-indigo-700 p-5 rounded-full shadow shadow-slate-500'>
          <BsSearch color="white" size={30}/>
      </div>
    </Link>
  )
}

export default BottomSearchIcon