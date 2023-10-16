import { useState, useEffect } from 'react'
import './App.css';
import ListCountries from './ListCountries';
import Filter from './Filter';
import CountriesForm from './CountriesForm';

function App() {

  // useStates
  const [ countries, setCountries ] = useState([]);
  const [ newCountry, setNewCountry ] = useState('');
  const [ filter, setFilter ] = useState('');

  // useEffects
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then((json) => {
        setCountries(json)
      })
  }, [])

  const handleChangeFilter = (event) => {
    setFilter(event.target.value.toLowerCase());
  }

  const handleChange = (event) => {
    setNewCountry(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (countries.map(element => element.name.common).includes(newCountry)) {
      alert(`${newCountry} is already added to phonebook`)
    } else {
      const data = { 
        name: {
          official: newCountry
        }
      }
      setCountries([...countries, data]);  
    }  
    setNewCountry('');
  }

  // He encapsulado una acción dentro de una función porque la he reutilizado en diferentes partes del componente
  const filterFuntion = (element) => {
    return element.filter(element => element.name.official.toLowerCase().includes(filter))
  }

  return (
    <div>
      <h2>Countries</h2>
      <Filter filter={filter} change={handleChangeFilter}/>
      <CountriesForm countries={countries} submit={handleSubmit} change={handleChange} newName={newCountry} />
      <h2>List</h2>
      {
        filter.length === 0 ? 
        <p>Filter not applied</p> :  
        (filterFuntion(countries)).length > 10 ? 
        <p>Too many matches, especify anoter filter </p> :
        filterFuntion(countries).map(element => <ListCountries key={element.name.official} countries={element} numCountries={(filterFuntion(countries)).length} />)
      }
    </div>  
  );
}

export default App;
