import { useState } from 'react'

const ListCountries = ({ countries, numCountries }) => {
 
    const [ numOfCountries, setNumCountries ] = useState(numCountries)
    const [ show, setShow] = useState(true);
    const [ weather, setWeater ] = useState([]);

    const handleClick = () => {
        setShow(() => !show)
        if (show === true) { setNumCountries(1) }
        // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${countries.capitalInfo.latlng[0]}&longitude=${countries.capitalInfo.latlng[1]}&hourly=temperature_2m`)
            .then(response => response.json())
            .then((json) => {
                return setWeater(json)
            })
    }

    return (
        <div>
            { 
                numOfCountries > 1 ?
                    <>
                        <span>{countries.name.official}</span><button onClick={handleClick}>show</button>
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
                    <p>temperature: {weather.hourly.temperature_2m[0]}</p>
                </div>
            }
        </div>
    )
}

export default ListCountries;