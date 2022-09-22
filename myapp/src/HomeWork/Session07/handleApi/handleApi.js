import axios from 'axios'

const request = axios.create({baseURL:'https://provinces.open-api.vn/'})


export const getData = async (path, options = {}) => {
    const respon = await request.post(path, options);
    
        return respon.async;
    
    };
    