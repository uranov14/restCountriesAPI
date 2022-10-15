import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Country = () => {
  const [country, setCountry] = useState([])
  const {name} = useParams()

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
      const country = await response.json()
      setCountry(country)
    }
    
    fetchCountries()
  }, [name])

  useEffect(() => {
    const btnBack = document.getElementById('btnBack')
    const country = document.getElementById('pageCountry')

    if (localStorage.getItem('isBlack')) {
      btnBack.classList.add('dark-theme')
      country.classList.add('dark-theme')
    }
  })

  return ( 
    <section id='pageCountry'>
      <div className='pt-12 md:pt-20'>
        <Link to="/" 
          id='btnBack'
          className='py-1 px-5 ml-5 md:mx-20'
        >
          <i className='fas fa-arrow-left pr-2'></i>
          Back
        </Link>
      </div>

      {country.map(c => {
        const {flag, flags, name, population, region, subregion, tld, capital, currencies, languages, borders} = c

        let txtCurrencies = [];
        for (let prop in currencies) {
          txtCurrencies.push(currencies[prop].name);
        }

        let txtLanguages = [];
        for (let prop in languages) {
          txtLanguages.push(languages[prop]);
        }

        let txtNativeName = [];
        const nativeName = name.nativeName
        for (let prop in nativeName) {
          txtNativeName.push(nativeName[prop].common);
        }

        return <article key={flag} className='grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 py-16 md:pt-20 md:pb-32 px-5 md:px-20'>
          <div className='flag'>
            <img src={flags.svg} alt={name.common} className=''/>
          </div>

          <div className='country-details -mt-7 md:mt-10'>
            <h2 className='text-xl font-bold pb-3'>{name.common}</h2>

            <div className='grid md:grid-cols-2 gap-10'>
              <div>
                <h4 className='pb-2'><span className='text-sl'>Native Name: </span>{txtNativeName.pop()}</h4>
                <h4 className='pb-2'><span className='text-sl'>Population: </span>{population}</h4>
                <h4 className='pb-2'><span className='text-sl'>Region: </span>{region}</h4>
                <h4 className='pb-2'><span className='text-sl'>Sub Region: </span>{subregion}</h4>
                <h4 className='pb-2'><span className='text-sl'>Capital: </span>{capital}</h4>
              </div>

              <div>
                <h4 className='pb-2'><span className='text-sl'>Top Level Domain: </span>{tld}</h4>
                <h4 className='pb-2'><span className='text-sl'>Currencies: </span>{txtCurrencies[0]}</h4>
                <h4 className='pb-2'><span className='text-sl'>Languages: </span>{txtLanguages.toString()}</h4>
              </div>
            </div>

            <div className='flex flex-col md:flex-row pb-2 mt-12'>
              <h4 className='mr-2'>
                <span className='text-sl'>Border Countries: </span>
              </h4>
          
              <div className='borders mt-3 md:mt-0'>
                {borders ?
                  borders.map((border, index) => {
                    return <Link 
                      key={index}
                      to={`/countries/${localStorage.getItem(border)}`}
                      className='linkBorders px-3 mr-3 mb-2'
                    >
                      {border}
                    </Link>
                  })
                  :
                  <h3>NOT BORDER COUNTRIES</h3>
                }
              </div>
            </div>
          </div>
        </article>
      }) 
      }
    </section>
  )
}

export default Country