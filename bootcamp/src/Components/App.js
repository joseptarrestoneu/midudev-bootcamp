import { useState } from 'react';
import './App.css';
import Note from './Note';

function App(props) {

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  
  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }
    setNotes([...notes, noteToAddToState])
    setNewNote('');
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }

  return (
    typeof notes === "undefined" ? "No hay notas a mostrar" : 
    notes.length === 0 ? "No tenemos notas a mostrar" : 
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? "Show only importa" : "Show all"}
      </button>
      <ol>
        {notes
        .filter((notes) => {
          if (showAll === true) return true;
          return notes.important === true
        } 
        
        )
        .map((notes) => (
          <Note key={notes.id} id={notes.id} content={notes.content} date={notes.date}/>
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
