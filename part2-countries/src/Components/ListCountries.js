import { useState } from 'react'

const ListCountries = ({ countries, numCountries }) => {
 
    const [ numOfCountries, setNumCountries ] = useState(numCountries)
    const [ show, setShow] = useState(true);

    const handleClick = (element) => {
        console.log("Element",  element)
        setShow(() => !show)
        if (show === true) { setNumCountries(1) }
    }

    return (
        <div>
            { 
                numOfCountries > 1 ?
                    <>
                        <span>{countries.name.official}</span><button onClick={() => handleClick(countries.capitalInfo)}>show</button>
                    </> :
                <div>
                    <h1>{countries.name.official}</h1>
                    <p>capital {countries.capital}</p>
                    <p>population {countries.population}</p>
                    <h2>languages</h2>
                    <ul>
                    { 
                        Object.values(countries.languages).map((element,index) => <li key={index}>{element}</li>)
                    }
                    </ul>
                    <img src={countries.flags.png} alt="Flag"></img>
                </div>
            }
        </div>
    )
}

export default ListCountries;