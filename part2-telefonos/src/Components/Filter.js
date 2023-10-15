
const Filter = ({filter, change}) => {
   
  return (
    <div>
        filter show with: <input type='text' id='filter' onChange={change} value={filter}></input>
    </div>
)
}

export default Filter;