const { Country, Activity } = require('../db'); 
const axios = require('axios');
const { Op } = require("sequelize");

const cleanArray = (array)=>
    array.map(country=>{
        let capital = ''
        if(!country.capital?.[0]) {
            capital = 'none';
        }else{
            capital = country.capital?.[0];
        };
        return{
            id: country.cca3,
            name: country.name.common,
            officialName: country.name.official,
            flag: country.flags[1],
            continent: country.region,
            capital: capital,
            subRegion: country.subregion,
            area: country.area,
            population: country.population
        }
    })

const queryCreator = (name, continents, activity)=>{
    let query = {};
    if (continents!== 'all') {
        const arrContinents = continents.split(' ')
        query = {
            ...query,
            continent:{
                [Op.or]: arrContinents
            }
        }
    }
    if (name!== undefined) {
        const lowerCase = name.toLowerCase();
        const capitalized= lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
        query = {
            ...query,
            name: {
                [Op.or]: {
                    [Op.substring]: lowerCase, 
                    [Op.substring]: capitalized
                }
            }
        }
    }

    if (activity) {
        query ={
            ...query,
            include:[{
                model: Activity,
                through: {
                    where: {name: activity}
                }
            }]
        }
    }
    return query;
}

const fillDataBase = async()=>{
    const rawCountries = (await axios.get('https://restcountries.com/v3/all')).data;
    const clearCountries = cleanArray(rawCountries);
    await Country.bulkCreate(clearCountries);
    console.log(`Data Base Loaded with ${clearCountries.length} rows`);
}

const getCountries = async(order, orderBy, name, continents, activity)=>{
   
    const countries = await Country.findAll({
        where: queryCreator(name,continents,activity),
        order:[[orderBy, order]]
    });
    // console.log(countries);
    return countries;
}

const getCountrybyId = async (id)=>{
    const country= await Country.findAll({
        where:{
            id: {[Op.eq]: id}
        }
    });
    return country;
}

module.exports = { getCountries, getCountrybyId, fillDataBase }