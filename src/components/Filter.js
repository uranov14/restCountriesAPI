import React, { useState } from 'react'

const Filter = () => {
    const [value, setValue] = useState("")

    const searchCountry = (e) => {    
        const val = e.target.value
        const countryNames = document.querySelectorAll('.country-name')
        
        countryNames.forEach(nameCountry => {
            if (nameCountry.innerText.toLowerCase().includes(val.toLowerCase())) {
                nameCountry.parentElement.parentElement.style.display = 'block'
            } else {
                nameCountry.parentElement.parentElement.style.display = 'none'
            }
        })    
    }

    const selectByRegion = (val) => {
        const regions = document.querySelectorAll('.region')

        regions.forEach(reg => {
            let valReg = reg.innerText.split(' ')[1]
            if (valReg.includes(val)) {
                reg.parentElement.parentElement.style.display = 'block'
            } else {
                reg.parentElement.parentElement.style.display = 'none'
            }
        })
    }

  return (
    <section 
        className='filter flex flex-col md:flex-row items-center justify-between px-3 md:px-20 pt-8 pb-2'
    >
        <form className='form w-full'>
            <input 
                type='search' 
                name='search' 
                id='search'
                className='btn bg-white px-5 py-3 w-full md:w-1/2'
                placeholder='Search for a country...' 
                onInput={searchCountry}
            />
        </form>

        <div className='btn region-select pl-2 md:pl-0 md:flex justify-end mt-10 md:mt-0 mb-3 md:mb-0 mr-32 md:mx-0'>
            <select 
                name='select' 
                id='select'
                value={value}
                onChange={e => {
                    setValue(e.target.value)
                    selectByRegion(e.target.value)
                }}
                className='py-3 md:w-full'
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