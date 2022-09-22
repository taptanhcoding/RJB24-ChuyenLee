import axios from "axios";


const request =  axios.create({baseURL: 'http://api.openweathermap.org/data/3.0/onecall/timemachine'})


export const getWeather = async(path,option ={}) => {
    const weather = await request.get(path,option)
    return weather;
}