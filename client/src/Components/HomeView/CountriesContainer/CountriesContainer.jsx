import s from './CountriesContainer.module.css';
import Country from '../Country/Country';
import { useSelector } from 'react-redux';


const CountriesContainer =({countries})=>{
    
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