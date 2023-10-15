
const PersonForm = ({ submit, change, newName, newPhone }) => {

    return (
        <form onSubmit={submit}>
            <div>
            name: <input type='text' id='name' onChange={change} value={newName}></input>
            </div>
            <div>
            <button type='submit'>add</button>
            </div>
        </form>
    )
}

export default PersonForm;