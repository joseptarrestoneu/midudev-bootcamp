import Counter from "./Counter";

const Statistics = ({click}) => {

        // Calculem el valor que passem al comptador (component Counter) a través de la prop number
        const goodComent = click.filter((element) => element === 1).length;
        const neutralComent = click.filter((element) => element === 0).length;
        const badComent = click.filter((element) => element === -1).length;
        const allComents = click.length;
        const avgComents = (( goodComent * 1 + badComent * -1 ) / click.length).toFixed(1);
        const positiveComents = ((click.filter((element) => element === 1).length) / click.length  * 100).toFixed(1) + '%';
      
  return (
    <>
        <Counter value={goodComent} text={"good"}/>
        <Counter value={neutralComent} text={"neutral"}/>
        <Counter value={badComent} text={"bad"}/>
        <Counter value={allComents} text={"all"}/>
        <Counter value={avgComents} text={"avg"}/>
        <Counter value={positiveComents} text={"positive"}/>        
    </>
  )
}

export default Statistics;