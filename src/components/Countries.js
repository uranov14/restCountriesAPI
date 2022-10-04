import React, { useEffect, useState } from 'react'

const url = 'https://restcountries.com/v3.1/all'

const Countries = () => {
    const [countries, setCountries] = useState([])

    const fetchCountryData = async () => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        console.log(countries)
    }

    useEffect(() => {
        fetchCountryData()
    }, [])

  return (
    <section className='grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10 px-14 md:px-20 py-5'>
        {countries.map(country => {
            const {flag, flags, name, population, region, capital} = country

            return <article key={flag} className='shadow-lg'>
                <img src={flags.svg} alt='flag'/>
                <div className='details bg-white px-5 pt-5 pb-10'>
                    <h2 className='text-xl font-bold pb-3'>{name.common}</h2>
                    <h4 className='pb-2'><span className='text-sl'>Population: </span>{population}</h4>
                    <h4 className='pb-2'><span className='text-sl'>Region: </span>{region}</h4>
                    <h4 className='pb-2'><span className='text-sl'>Capital: </span>{capital}</h4>
                </div>
            </article>
        })}
    </section>
  )
}

export default Countries