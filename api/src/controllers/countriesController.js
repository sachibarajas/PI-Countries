const { Country } = require('../db') 
const axios = require('axios')

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

const fillDataBase = async()=>{
    const rawCountries = (await axios.get('https://restcountries.com/v3/all')).data;
    const clearCountries = cleanArray(rawCountries);
    await Country.bulkCreate(clearCountries);
    console.log(`Data Base Loaded with ${clearCountries.length} rows`);
}

const getCountries = async(order)=>{
    const countries = await Country.findAll({order:[
        ['id', order]
    ]});
    // console.log(countries);
    return countries;
}

const getCountrybyId = async (id)=>{
    const country= await Country.findAll({
        where:{
            id: id
        }
    });
    return country;
}

const getCountryByName = ()=>{

}

module.exports = { getCountries, getCountryByName, getCountrybyId,fillDataBase }