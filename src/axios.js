import axios from 'axios';

// base url to make request to the server
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

// sending base url in axios means 
// like if the call is ===> insatnce.get('/food-bar');
// Then the above request will go with the appended instance base to server

export default instance;