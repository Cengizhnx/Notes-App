import { useDispatch, useSelector } from 'react-redux'
import { getNotes, toggle } from '../redux/notes/notesSlice'

function Notes() {

    const items = useSelector(getNotes)

    const dispatch = useDispatch()

    const handleToggle = (id) => {
        if (window.confirm("🤔 Are you sure ?")) {
            dispatch(toggle(id))
        }
    }

    console.log(items);

    return (
        < div className='flex flex-wrap' >
            {
                items.map((item, key) => (
                    <div key={key} className="bg-white w-72 rounded-lg mt-5 ml-5 px-6 pt-5 pb-8 ring-1 ring-slate-900/5 shadow-xl">
                        <div>
                            {
                                item.completed === true
                                    ? <span className="inline-flex text-white items-center italic justify-center py-2 px-3 bg-green-600 rounded-md shadow-lg">Completed </span>
                                    : <span onClick={() => handleToggle(item.id)} className={`inline-flex text-white items-center italic justify-center py-2 px-3 ${item.color} rounded-md shadow-lg cursor-pointer`}>#{item.id}</span>
                            }
                        </div>
                        <h3 className="text-slate-900 mt-3 font-medium">{item.title}</h3>
                        <p className="text-slate-600 mt-3">{item.description}</p>
                    </div>
                ))
            }
        </div >
    )
}

export default Notes