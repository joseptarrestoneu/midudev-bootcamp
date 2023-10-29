const Note = ({ content, date, important }) => {
    return (
        <li className="note">
            <small><p>{content}</p></small>
            <small><p>{date}</p></small>
            <small><p>{important.toString()}</p></small>
            <button>Important!</button>
        </li>
    );
};

export default Note;
