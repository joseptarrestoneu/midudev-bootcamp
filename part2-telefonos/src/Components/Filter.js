
const Filter = (filter) => {
   
  return (
    <div>
        filter show with: <input type='text' id='filter' onChange={filter.change} value={filter.filter}></input>
    </div>
)
}

export default Filter;