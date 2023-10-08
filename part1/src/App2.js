import { useState } from "react";

const Counter  = ({number}) => {
  return <h1>{number}</h1>
}

const App2 = (props) => {

  const [click, setClick] = useState([]);
  
  const handleClick = (valor) => {
    valor === 'incrementar' ? setClick(prevClicks => [...prevClicks, 'incrementar']) : setClick(prevClicks => [...prevClicks, 'decrementar'])
  }

  const handleClickReset = () => {
    setClick([]);
  }

  const increments = click.filter((element) => element === 'incrementar').length;
  const decrements = click.filter((element) => element === 'decrementar').length;
  const sum = increments - decrements;
  
  const isEven = sum % 2 === 0 
  
  return (
    <>
      <Counter number={sum}/>
      <small>{isEven ? 'Es parell' : 'Es imparell'}</small>
      <br></br>
      <button onClick={() => {
        handleClick('incrementar')
      }}>
        Incrementar
      </button>
      <button onClick={() => {
        handleClick('decrementar')
      }}>
        Decrementar
      </button>
      <button className="reset" onClick={handleClickReset}>
        Reset
      </button>
    </>
  )
}

export default App2;