import axios from 'axios';

const getAllNotes = () => {
  
//  Opció fetch
    // return fetch('http://localhost:3001/api/notes')
    //     .then(response => response.json())
        // .then((json) => json);

//  Opció fetch
 return axios.get('http://localhost:3001/api/notes')
     .then(response => {
         const {data} = response
         return data
     });

}

export default getAllNotes;