import { useEffect, useState } from 'react'
import './App.css';
import ListNames2 from './ListNames2';
import Filter from './Filter';
import PersonForm from './PersonsForm';
import Notification from './Notification';

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
  const [ newMessage, setNewMessage ] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewMessage('')
    }, 3000);
    return () => clearTimeout(timer);
  },[newMessage])

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
        let data;
        data = { 
          name: newName,
          number: newPhone, 
        }
        setPersons([...persons, data]);  
        setNewMessage(data.name)
    }
    setNewName('');
    setNewPhone('');
  }

  const handelClick = (event) => {
    event.preventDefault();
    let filterPersons;
    if (window.confirm("Do you really want to detete?")) {
      filterPersons = persons.filter(name => name.name !== event.target.value );
      setPersons(filterPersons)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={newMessage}/>
      <Filter filter={filter} change={handleChangeFilter}/>
      <PersonForm persons={persons} submit={handleSubmit} change={handleChange} newName={newName} newPhone={newPhone}/>
      <h2>Number</h2>
      {
        persons
          .filter((element) => {
            return element.name.toLowerCase().includes(filter);
          })
          .map((element) => (
            <ListNames2 key={element.name} persons={element} handelClick={handelClick}/>
          ))    
        }
    </div>  
  );
}

export default App;
