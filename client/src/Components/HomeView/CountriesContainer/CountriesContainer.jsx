import s from './CountriesContainer.module.css';
import Country from '../Country/Country';
import dummyCountries from '../../../Assets/countriesDummy.json'

const CountriesContainer =()=>{
    const countries = dummyCountries;
    return(
        <div className={s.CountriesContainer}>
            {countries.map(country=>{
                return <Country
                    name={country.name}
                    flag={country.flag}
                    continent={country.continent}
                    key = {country.id}
                    id = {country.id}
                />
            })}
        </div>
    )
}

export default CountriesContainer;