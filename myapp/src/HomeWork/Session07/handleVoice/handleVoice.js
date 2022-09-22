import axios from "axios";

export const requestVoice = (speed,voice) => axios.create({
  baseURL: "https://api.fpt.ai/hmi/tts/v5",
  headers: {
    "api-key": "VToA1x0hFjYS497V7hzvE2MrT0qNQsOM",
    speed,
    voice,
  },
});

export const postVoice = async (speed,voice,path, options = '') => {
    
    let res = await requestVoice(speed,voice).post(path,JSON.stringify(options))
        
    return res.data
};
