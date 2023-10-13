import './App.css';
import Note from './Note';

function Part2_1() {

  const notes = [
      {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
      },
      {
        id: 2,
        content: 'Browser can execute only JavaScript',
        date: '2019-05-30T18:39:34.091Z',
        important: false,
      },
      {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true,
      },
    ]
    
    return (
      typeof notes === "undefined" ? "No hay notas a mostrar" : 
      notes.length === 0 ? "No tenemos notas a mostrar" : 
      <ol>
        {notes.map((notes) => {
          return <Note key={notes.id} id={notes.id} content={notes.content} date={notes.date}/>
        })}
      </ol>
    )    
}

export default Part2_1;
