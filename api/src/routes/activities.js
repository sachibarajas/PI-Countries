const { Router } = require('express');

const actRouter = Router();

const {
    getActivitiesHandler, 
    createActivityHandler } = require('../handlers/activitiesHandlers')

actRouter.get('/', getActivitiesHandler)
actRouter.post('/', createActivityHandler)

module.exports = actRouter