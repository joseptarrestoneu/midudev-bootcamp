import { useState } from 'react'
import './App.css';
import ListNames from './ListNames';

function App() {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [ newName, setNewName ] = useState('');
  const [ newPhone, setNewPhone ] = useState('');
  const [ filter, setFilter ] = useState('');

  const handleChangeFilter = (event) => {
    setFilter(event.target.value.toLowerCase());
    console.log(event.target);
    
  }

  const handleChange = (event) => {
    if (event.target.id === 'name') {
      setNewName(event.target.value)
    }
    if (event.target.id === 'phone') {
      setNewPhone(event.target.value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.map(element => element.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const data = { 
        name: newName,
        phone: newPhone, 
      }
      setPersons([...persons, data]);  
    }  
    setNewName('');
    setNewPhone('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter show with: <input type='text' id='filter' onChange={handleChangeFilter} value={filter}></input>
        </div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type='text' id='name' onChange={handleChange} value={newName}></input>
          phone: <input type='tel' id='phone' onChange={handleChange} value={newPhone}></input>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Number</h2>
        {
        persons
          .filter((element) => {
            return element.name.toLowerCase().includes(filter);
          })
          .map((element) => (
            <ListNames key={element.name} persons={element}/>
          ))    
        }
    </div>  
  );
}

export default App;
