import axios from 'axios';

const URL = 'https://test-backend-0-1.onrender.com';

export const addEvent = async () =>{
    const response = await axios.post(`${URL}/event`);
    return response.data;
}

export const addUser = async(eventId)=>{
    const response = await axios.post(`${URL}/event/${eventId}/registration`)
    return response.data;
}

export const getEvents = async()=>{
    const response = await axios.get(`${URL}/event/allEvents`);
    return response.data;
}
export const getUsers = async(eventId)=>{
    const response = await axios.get(`${URL}/event/${eventId}/allUsers`);
    return response.data;
}