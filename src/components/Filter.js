import React, { useState } from 'react'

const Filter = () => {
    const [value, setValue] = useState("")

  return (
    <section 
        className='filter flex flex-col md:flex-row items-center justify-between px-3 md:px-20 pt-8 pb-2'
    >
        <form className='form w-full'>
            <input 
                type='search' 
                name='search' 
                id='search'
                className='bg-white px-5 py-3 w-full md:w-10/12 shadow-lg'
                placeholder='Search for a country...' 
            />
        </form>

        <div className='region-select md:flex justify-end w-full'>
            <select 
                name='select' 
                id='select'
                value={value}
                onChange={e => setValue(e.target.value)}
                className='px-5 py-3 mt-10 md:mt-0 shadow-lg w-7/12 md:w-1/3'
            >
                <option id='disable' disabled value="">Filter by region</option>
                <option value='Africa'>Africa</option>
                <option value='America'>America</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
            </select>
        </div>
    </section>
  )
}

export default Filter