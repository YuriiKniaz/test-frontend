import axios from 'axios';

const URL = 'https://test-backend-p9jx.onrender.com';

export const addEvent = async () =>{
    const response = (await axios.post(`${URL}/event`)).data;
    return response;
}

export const addUser = async(eventId)=>{
    const response = (await axios.post(`${URL}/event/${eventId}/registration`)).data
    return response;
}
