import { useState } from 'react'
import './App.css';
import ListNames2 from './ListNames2';
import Filter from './Filter';
import PersonForm from './PersonsForm';

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
        number: newPhone, 
      }
      setPersons([...persons, data]);  
    }  
    setNewName('');
    setNewPhone('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} change={handleChangeFilter}/>
      <PersonForm persons={persons} submit={handleSubmit} change={handleChange} newName={newName} newPhone={newPhone}/>
      <h2>Number</h2>
      {
        persons
          .filter((element) => {
            return element.name.toLowerCase().includes(filter);
          })
          .map((element) => (
            <ListNames2 key={element.name} persons={element}/>
          ))    
        }
    </div>  
  );
}

export default App;
