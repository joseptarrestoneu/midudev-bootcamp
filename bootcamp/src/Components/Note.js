const Note = ({ title, body }) => {
    return (
        <li>
            <p><strong>{title}</strong></p>
            <small><p>{body}</p></small>
        </li>
    );
};

export default Note;
