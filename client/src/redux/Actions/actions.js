import { GET_COUNTRY, GET_COUNTRIES, GET_ACTIVITIES, FILTER_COUNTRIES } from "./types";
import axios from 'axios';

const apiDir = 'http://localhost:3001/';

export const getCountry=(id)=>{
    return async function(dispatch){
        const apiData = await axios.get(`${apiDir}/countries/${id}`)
    }
}