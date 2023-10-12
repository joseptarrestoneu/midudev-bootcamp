import { useState } from 'react';
import './App.css';
import Statistics from './Statistics';
import Anecdote from './Anecdote';

const App = () => {

  // Part 1
  const [click, setClick] = useState([]);

  const handleClick = (valor) => {
    setClick(prevClicks => [...prevClicks, valor])
  }

  // Part 2
  const [anecdote, setAnecdote] = useState([0,0,0,0,0,0]);  
  const [number, setNumber] = useState(0);

  const handleClickNum = () => {
    const numero = Math.floor(Math.random() * (6 - 0) + 0);
    setNumber(numero)
  }

  const handleClickAnecdotes = () => {
    setAnecdote( () => {
      const copyAnecdote = [ ...anecdote ];
      copyAnecdote[number] += 1;
      return copyAnecdote;
    });
  }

  const newArrayAnecdote = [...anecdote]
  const compare = (value1, value2) => {
    return value1 - value2;
  }
  newArrayAnecdote.sort(compare).reverse();
  
  return (
    <>
      {/*Part 1*/}
      <div>
        <h1>GIVE FEEDBACK</h1>
        <button onClick={() => handleClick(1)}>good</button>
        <button onClick={() => handleClick(0)}>neutral</button>
        <button onClick={() => handleClick(-1)}>bad</button>
      </div>
      <h2>STATISTICS</h2>
      {click.length === 0 ? "No feedback given" : <Statistics click = {click}/>}
      {/*Part 2*/}
      <div>
        <h2>ANECDOTES</h2>
        <Anecdote value={number} number={anecdote[number]}/>
        <button onClick={handleClickAnecdotes}>vote</button>
        <button onClick={handleClickNum}>Next andecdote</button>
      </div>
      <div>
        <Anecdote value={anecdote.indexOf(newArrayAnecdote[0])} number={newArrayAnecdote[0]} />
      </div>
    </>
  );
}

export default App;
