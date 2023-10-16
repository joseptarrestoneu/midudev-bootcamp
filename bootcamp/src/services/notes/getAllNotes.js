// import axios from 'axios';

const getAllNotes = () => {
  
//  Opció fetch
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((json) => json);

        //  Opció fetch
//  return axios.get('https://jsonplaceholder.typicode.com/posts')
//      .then(response => {
//          const {data} = response
//          return data
//      });

}

export default getAllNotes;