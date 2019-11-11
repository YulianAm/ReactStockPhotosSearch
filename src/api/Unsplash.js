import axios from 'axios';


const path = 'https://api.unsplash.com/';

export default axios.create({
    baseURL: path,
    headers: {
        Authorization:
            'Client-ID de2e32db1ec50ea98355b8b9ed2860eae8d776840e26d70c521db4376932fbd5'
    }

});
