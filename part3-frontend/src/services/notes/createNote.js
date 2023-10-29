import axios from 'axios';

const createNote = ({ content, important }) => {

    return axios
        .post('http://localhost:3001/api/notes/', { content, important })
        .then((response) => {
            const { data } = response;
            return data;
    });
};

export default createNote;