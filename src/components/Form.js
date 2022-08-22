import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNote, getColors } from '../redux/notes/notesSlice';

import { Button } from '@chakra-ui/react'
import { BsClipboardCheck } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';


function Form() {

    const colors = useSelector(getColors)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [color, setColor] = useState("bg-indigo-600")

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description) {
            toast.error("Fields Reqiured !")
        }
        else {
            toast.success("Note Added")
            dispatch(addNote({ title, description, color }))
        }
    }

    return (
        <div className='pt-5'>

            <form action="">
                <div className='mb-5 flex justify-center'>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className="placeholder: placeholder:text-slate-400 block bg-white w-72 rounded-2xl py-2 pl-3 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter your title here..." type="text" name="title" />
                </div>

                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="textareaSize placeholder: placeholder:text-slate-400 block bg-white w-96 rounded-2xl py-2 pt-3 pl-3 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder='Enter your note here...' name="description" id="" cols="30" rows="13"></textarea>

                <div className='grid grid-cols-5 mt-5 pt-4 p-4 bg-white rounded-lg shadow-md'>
                    {
                        colors.map((item, key) => (
                            <div key={key} className='mt-2'>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    setColor(item)
                                }} className={`inline-flex text-white items-center italic justify-center p-4 rounded-full shadow-lg ${item}`}></button>
                            </div>
                        ))
                    }

                </div>

                <Button onClick={handleSubmit} className='mt-5 shadow-lg' leftIcon={<BsClipboardCheck />} colorScheme='gray'>Add Note</Button>
            </form>
            <Toaster></Toaster>
        </div>
    )
}

export default Form