import { useDispatch } from 'react-redux';
import { searchNote } from '../redux/notes/notesSlice';

function Search() {

    const dispatch = useDispatch()

    return (
        <div className='pt-5'>
            <input onChange={(e) => dispatch(searchNote(e.target.value))} className="placeholder:text-slate-400 block bg-white w-52 rounded-2xl py-2 pl-3 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for Title..." type="text" name="search" />
        </div>
    )
}

export default Search