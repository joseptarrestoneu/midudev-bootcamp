
const Note = ({id, content, date}) => {

    return (
      <>
          {/* <div> 
              <p><strong>{content}</strong></p>
              <small><time>{date}</time></small>
          </div> */}
          <li> 
              <p><strong>{content}</strong></p>
              <small><time>{date}</time></small>
          </li>
          {/* <li> 
              <p><strong>{content}</strong></p>
              <small><time>{date}</time></small>
          </li> */}
    </>
    )
  }
  
  export default Note;