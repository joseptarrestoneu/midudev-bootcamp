import './Notification.css'

const Notification = ({ message }) => {

    if (message === '') {
        return null
    } 

    return (
    <div className='message'>
        Added {message}
    </div>
  )
}

export default Notification;