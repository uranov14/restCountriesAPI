import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Filter from './Filter'

const url = 'https://restcountries.com/v3.1/all'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch(url)
            const countries = await response.json()
            setCountries(countries)
        }
        
        fetchCountries()
    }, [])

    const removeCountry = (flag) => {
        const newCountries = countries.filter(item => item.flag !== flag)
        setCountries(newCountries)
    }

  return (
    <>
        <Filter />
        <section className='countries grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10 px-14 md:px-20 py-5'>
            {countries.map((country, index) => {
                const {flag, flags, name, population, region, capital} = country

                return <article key={index} className='shadow-lg'>
                    <img src={flags.svg} alt='flag'/>
                    <div className='details bg-white px-5 pt-5 pb-10'>
                        <h2 className='text-xl font-bold pb-3'>{name.common}</h2>
                        <h4 className='pb-2'><span className='text-sl'>Population: </span>{population}</h4>
                        <h4 className='pb-2'><span className='text-sl'>Region: </span>{region}</h4>
                        <h4 className='pb-2'><span className='text-sl'>Capital: </span>{capital}</h4>
                        <div className='buttons flex items-center justify-between'>
                            <Link to={`/countries/${name.common}`}
                                className='btn p-1 shadow-lg'
                            >
                                Learn more
                            </Link>
                            <button className='btn p-1 shadow-lg' 
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