import { useEffect, useState } from 'react';
import './App.css';
import Note from './Note';
import getAllNotes from '../services/notes/getAllNotes';
import createNote from '../services/notes/createNote';

function App(props) {

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    getAllNotes()
      .then(notes => {
        setNotes(notes)
      })    
  }, [])

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      content: newNote,
      important: false,
    }

    // Hacemos de forma optimista para ir mas rapido
    // Atención para introducir el id si te viene de la BBDD
    setNotes([...notes, noteToAddToState]);

    createNote(noteToAddToState)
      .then(newNotes => {
        setNotes([...notes, newNotes]);
      })

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
