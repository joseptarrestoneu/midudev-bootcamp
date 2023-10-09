import Counter from "./Counter";
import { useState } from "react";

const App2 = (props) => {

  // Hook useState: sempre pensar que els useState van "cars". Cal que n'hi hagi molt pocs
  const [click, setClick] = useState([]);

  // Funcio per actualitzar el valor useState (setClick) al fer click al botó (evento click)
  // Ho fem amb una ternària
  // Ho fem a través el ... (spread operator) per encadenar el valor que capta al array: prevClick => [...prevClicks, 'incrementar'] és accedir a l'estat anterior (en aquest cas un array de valors)
  // i efegir el nou estat (els concatanem en aquest cas. Si son numeros és fer operacions. Per exemple [prevClicks +1])
  const handleClick = (valor) => {
    valor === 'incrementar' ? setClick(prevClicks => [...prevClicks, 'incrementar']) : setClick(prevClicks => [...prevClicks, 'decrementar'])
  }

  // Funció per netejar el useState i resetejar-lo a 0 (evento click)
  const handleClickReset = () => {
    setClick([]);
  }

  // Calculem el valor que passem al comptador (component Counter) a través de la prop number
  const increments = click.filter((element) => element === 'incrementar').length;
  const decrements = click.filter((element) => element === 'decrementar').length;
  const sum = increments - decrements;
  
  // Calcular si el valor és parell o imparell
  const isEven = sum % 2 === 0
  
  return (
    <>
      <Counter number={sum}/>
      {/* renderitzat condicional amb una ternària */}      
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
      <br></br>
      <div>Número de clicks = {click.length}</div>
    </>
  )
}

export default App2;