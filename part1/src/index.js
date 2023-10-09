import React from 'react'
import ReactDOM from 'react-dom'
import Title from './Components/Header'
import Content from './Components/Content'
import Totals from './Components/Total'
import Contador from './Components/Contador'

const App = () => {

  const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    }
  ]
}
  const total = course.parts.map((elements) => elements.exercises);
  const sum = total.reduce((a, b) => a + b);

  return (
    <div>
      {/* <Title course={course.name} />
      <Content part={course.parts} />
      <Totals total={sum}/> */}
      <Contador />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))