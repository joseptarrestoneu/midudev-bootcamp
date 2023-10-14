import { useEffect, useState } from 'react';
// import axios from 'axios';
import './App.css';
import Note from './Note';

function App(props) {

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  // Opcio Fetch
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((json) => {
        setNotes(json)
      });
  }, [])

  // // Opcio Axios (cal importar "npm install axios")
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => {
  //       const {data} = response
  //       setNotes(data)
  //     });
  // }, [])

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote,
    }
    setNotes([...notes, noteToAddToState])
    setNewNote('');
  }

  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {notes.length === 0 ? "Cargando notas" :
          notes.map((notes) => (
          <Note key={notes.id} {...notes} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote}></input>
        <button type='submit'>Crear nota</button>
      </form>
    </div>
  )    
}

export default App;
