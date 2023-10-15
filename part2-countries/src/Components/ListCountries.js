const ListCountries = ({ countries, numCountries }) => {
 
    return (
        <div>
            { 
                numCountries > 1 ?
                <p>{countries.name.official}</p> :
                <div>
                    <h1>{countries.name.official}</h1>
                    <p>capital {countries.capital}</p>
                    <p>population {countries.population}</p>
                    <h2>languages</h2>
                    <ul>
                    { 
                        Object.values(countries.languages).map(element => <li>{element}</li>)
                    }
                    </ul>
                    <img src={countries.flags.png} alt="Flag"></img>
                </div>
            }
        </div>
    )
}

export default ListCountries;