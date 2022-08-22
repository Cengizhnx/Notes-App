import React from 'react'

function Search() {
    return (
        <div className='pt-5'>
            <input className="placeholder:text-slate-400 block bg-white w-52 rounded-2xl py-2 pl-3 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
        </div>
    )
}

export default Search