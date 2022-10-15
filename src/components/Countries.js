import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Filter from './Filter'

const url = 'https://restcountries.com/v3.1/all'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        if (localStorage.getItem('countries')) {
            setCountries(JSON.parse(localStorage.getItem('countries')))
        } else {
            const fetchCountries = async () => {   
                const response = await fetch(url)
                const countries = await response.json()
                setCountries(countries)
                localStorage.setItem('countries', JSON.stringify(countries))
                countries.forEach(c => {
                    localStorage.setItem(c.cca3, c.name.common)
                })           
            }
            fetchCountries()
        }  
    }, [])

    useEffect(() => {
        const buttons = document.querySelectorAll('.btn')
        const filter = document.getElementById('filter')
        const countries = document.getElementById('countries')
        const cards = document.querySelectorAll('.card')
    
        if (localStorage.getItem('isBlack')) {
            filter.classList.add('dark-theme')
            countries.classList.add('dark-theme')
            buttons.forEach(button => {
                button.classList.add('dark-theme')
            })
            cards.forEach(card => {
                card.classList.add('dark-theme')
            })
            console.log(localStorage.getItem('isBlack'));
        }
      })

    const removeCountry = (flag) => {
        const newCountries = countries.filter(item => item.flag !== flag)
        setCountries(newCountries)
    }

  return (
    <>
        <Filter />
        <section id='countries' className='countries grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10 px-12 md:px-20 py-5'>
            {countries.map((country, index) => {
                const {flag, flags, name, population, region, capital} = country

                return <article key={index} className='card'>
                    <img src={flags.svg} alt='flag'/>
                    <div className='details px-5 pt-5 pb-10'>
                        <h2 className='country-name text-xl font-bold pb-3'>{name.common}</h2>
                        <h4 className='pb-2'><span className='text-sl'>Population: </span>{population}</h4>
                        <h4 className='region pb-2'><span className='text-sl'>Region: </span>{region}</h4>
                        <h4 className='pb-2'><span className='text-sl'>Capital: </span>{capital}</h4>
                        <div className='buttons flex items-center justify-between'>
                            <Link to={`/countries/${name.common}`}
                                className='link_countries btn text-center py-1 px-2 shadow-lg'
                            >
                                Learn more
                            </Link>
                            <button className='link_countries btn py-1 px-2 shadow-lg' 
                                onClick={() => removeCountry(flag)}   
                            >
                                Remove Country
                            </button>
                        </div>

                    </div>
                </article>
            })}
        </section>
    </>
  )
}

export default Countries