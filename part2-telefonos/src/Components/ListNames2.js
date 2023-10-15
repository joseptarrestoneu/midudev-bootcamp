
const ListNames = ({ persons }) => {
    return <p key={persons.name}>{persons.name} {persons.number}</p>
}

export default ListNames;