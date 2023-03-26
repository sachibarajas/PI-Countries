const { Router } = require('express');
const countRouter = Router();
const {getCountriesHandler,
    getCountryIdHandler,
    getCountryNameHandler,
    createAllCountries} = require('../handlers/countriesHandlers')

countRouter.get('/', getCountriesHandler);
countRouter.get('/:id', getCountryIdHandler);
countRouter.get('/:name', getCountryNameHandler);
countRouter.post('/', createAllCountries)

module.exports = countRouter;