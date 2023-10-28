
const ListNames = ({ persons, handelClick } ) => {

    return <p key={persons.name}>{persons.name} {persons.number}<button onClick={handelClick} value={persons.name}>delete</button></p>
}

export default ListNames;