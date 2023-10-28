const Note = ({ title, body }) => {
    return (
        <li className="note">
            <p><strong>{title}</strong></p>
            <small><p>{body}</p></small>
            <button>Important!</button>
        </li>
    );
};

export default Note;
