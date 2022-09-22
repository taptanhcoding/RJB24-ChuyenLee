import axios from 'axios'

const requestData = axios.create({baseURL: 'https://632acadb713d41bc8e774bab.mockapi.io/files/me'})


export const getData = async(path,option={}) => {
    const data = await requestData.get(path,option)
    return data.data
}

export const putData = async(path,option={}) => {
    const data = await requestData.put(path,option)
    return data.data
}

export const createData = async(path,option={}) => {
    try {
        const data = await requestData.post(path,option)
        return data.data
    }
    catch(err) {
        return err
    }
}

export const removeData = async(path) => {
    const data = await requestData.delete(path)
    return data.data
}