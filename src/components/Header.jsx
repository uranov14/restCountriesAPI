import React, { useState } from 'react'

const switchTheme = () => {
    
    const header = document.getElementsByTagName('header')[0]
    header.classList.toggle('dark_border')
    header.classList.toggle('dark-theme')
    document.body.classList.toggle('dark-theme')

    const btnBack = document.getElementById('btnBack')
    localStorage.setItem('isBlack', 'true')
    
    if (document.body.classList.contains('dark-theme') && btnBack) {
        btnBack.classList.add('dark-theme')
    } else if (!document.body.classList.contains('dark-theme') && btnBack) {
        btnBack.classList.remove('dark-theme')
        localStorage.setItem('isBlack', '')
    }
    
    const buttons = document.querySelectorAll('.btn')
    buttons.forEach(button => {
        button.classList.toggle('dark-theme')
    })

    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        card.classList.toggle('dark-theme')
    })

    const filter = document.getElementById('filter')
    const form = document.getElementById('form')
    const select = document.getElementById('select')
    const countries = document.getElementById('countries')
    if (document.body.classList.contains('dark-theme') && filter) {
        filter.classList.add('dark-theme')
        form.classList.add('dark-theme')
        select.classList.add('dark-theme')
        countries.classList.add('dark-theme')
    } else if (!document.body.classList.contains('dark-theme') && filter) {
        filter.classList.remove('dark-theme')
        form.classList.remove('dark-theme')
        select.classList.remove('dark-theme')
        countries.classList.remove('dark-theme')
        localStorage.setItem('isBlack', '')
    }

    const country = document.getElementById('pageCountry')

    if (localStorage.getItem('isBlack') && btnBack) {
        country.classList.add('dark-theme')
    } else if (!localStorage.getItem('isBlack') && btnBack) {
        country.classList.remove('dark-theme')
        localStorage.setItem('isBlack', '')
    }
    
}

const Header = () => {
    const [isBlack, setIsBlack] = useState(false)

  return (
    <header className='flex justify-between px-3 md:px-20 py-6'>
        <h1 className='text-xl font-bold'>Where in the world?</h1>
        <div className='flex items-center'>
            <button 
                className="flex items-center" 
                id="btn_theme-toggle" 
                title="Toggles light & dark" 
                aria-label="auto" 
                aria-live="polite"
                onClick={() => {
                    setIsBlack(!isBlack)
                    switchTheme()
                }}
            >
                {!isBlack ? 
                    <div className='flex items-center'>
                        <i className='fas fa-sun '></i> 
                        <p className='mode font-bold ml-2'>Light Mode</p>
                    </div>
                    : 
                    <div className='flex items-center'>
                        <i className='fas fa-moon '></i>
                        <p className='mode font-bold ml-2'>Dark Mode</p>
                    </div>
                }
                
{/*             <svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                    <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
                    <g className="sun-beams" stroke="currentColor">
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                    <mask className="moon" id="moon-mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        <circle cx="24" cy="10" r="6" fill="black" />
                    </mask>
                </svg> */}
            </button>
        </div>
    </header>
  )
}

export default Header