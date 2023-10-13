
const Part = ({course}) => {

    return (
    <>
        {course.parts.map((element, index) => {
            return <p key={element.id}>{element.name} {element.exercises}</p>
        })}
    </>
        
    )

}

export default Part;