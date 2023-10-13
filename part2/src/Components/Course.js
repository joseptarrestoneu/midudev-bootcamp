import Content from './Content';
import Header from './Header.js'
import Totals from './Total';

const Course = ({course}) => {
  return (
    <div>
        <Header course={course}/>
        <Content course={course}/>
        <Totals total={course.parts} />
    </div>
  )
}

export default Course;