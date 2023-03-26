const { Activity } = require('../db')

const createActivity = async (name,season,difficulty,duration)=> 
    newActivity = await Activity.create({name,season,difficulty,duration});

const getActivity = async (id) =>{
    
}


module.exports ={createActivity}