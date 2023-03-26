const {createActivity} = require('../controllers/activitiesController')


const getActivitiesHandler= (req,res)=>{
    
    res.status(200).send('NDY: Muestra todas las actividades de la BD');
}

const createActivityHandler =async (req,res)=>{
    const {name,season,difficulty,duration} = req.body;
    try {
        const newActivity = await createActivity(name,season,difficulty,duration)
        res.status(201).json(newActivity)
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports={getActivitiesHandler,createActivityHandler}