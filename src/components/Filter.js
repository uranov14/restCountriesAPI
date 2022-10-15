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

    document.body.addEventListener('click', () => {
        document.getElementById('select').value = ''
    })
      
  return (
    <section 
        id='filter'
        className='filter flex flex-col md:flex-row items-center justify-between px-3 md:px-20 py-5'
    >
        <form id='form' className='form w-full'>
            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" opacity="0.3" viewBox="0 0 40 40" fill='gray' className="ais-SearchBox-submitIcon md:left-0">
                <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z" fillRule="evenodd">
                </path>
            </svg>
            
            <input 
                type='search' 
                name='search' 
                id='search'
                className='btn bg-white pl-20 py-3 w-full md:w-1/2'
                placeholder='Search for a country...' 
                onInput={searchCountry}
            />
        </form>

        <div className='region-select pl-2 md:pl-0 md:flex justify-end mt-10 md:mt-4 mb-3 md:mb-0 mr-32 md:mx-0'>
            <select 
                name='select' 
                id='select'
                value={value}
                onChange={e => {
                    setValue(e.target.value)
                    selectByRegion(e.target.value)
                }}
                className='btn py-3 md:w-full'
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