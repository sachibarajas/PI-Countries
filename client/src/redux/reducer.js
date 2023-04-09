import { GET_COUNTRY, GET_COUNTRIES, GET_ACTIVITIES, FILTER_COUNTRIES } from "./Actions/types";

const initialState={
    countries: [],
    activities: [],
    filteredCountries:[]
};

const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        default:
            return {...state};
    }
}

export default rootReducer;