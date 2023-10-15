
const Filter = ({filter, change}) => {
  return (
    <div>
        Find countries: <input type='text' id='filter' onChange={change} value={filter}></input>
    </div>
)
}

export default Filter;