const { Activity } = require('../db');



const createActivity = async (name,season,difficulty,duration)=> 
    newActivity = await Activity.create({name,season,difficulty,duration});

const getActivities = async (id) =>{
    const activities = Activity.findAll();
    return activities;
}

const activitiesInit = async (activities)=>{
    await Activity.bulkCreate(activities);
}

module.exports ={createActivity, activitiesInit, getActivities}