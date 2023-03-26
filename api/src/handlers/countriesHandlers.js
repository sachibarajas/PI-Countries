const {getCountries, fillDataBase, getCountrybyId} = require('../controllers/countriesController')

const createAllCountries = async (req,res)=>{
    try {
          const countries = await fillDataBase();
          res.status(200).json(countries)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getCountriesHandler = async (req,res)=>{
    let {order} = req.query;
    if (!order) order = 'ASC'
    try {
        const countries = await getCountries(order);
        res.status(200).json(countries)
  } catch (error) {
      res.status(400).json({error: error.message});
  }
}

const getCountryIdHandler = async (req,res)=>{
    const {id} = req.params;
    try {
        const response = await getCountrybyId(id)
        if (response.length > 0) {
            res.status(200).json(response);
        } else {
            res.status(404).json({error: 'NOT FOUND'});
        }
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getCountryNameHandler = (req,res)=>{
    try {
        const {name} = req.params;
        res.status(200).send(`NDY: devuelve la info del pais: ${name}`)
    } catch (error) {}
}

module.exports = {getCountriesHandler,getCountryIdHandler,getCountryNameHandler, createAllCountries}