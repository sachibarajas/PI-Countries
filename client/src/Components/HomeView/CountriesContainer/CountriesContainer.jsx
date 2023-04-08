import s from './CountriesContainer.module.css';
import Country from '../Country/Country';

const CountriesContainer =()=>{
    return(
        <div className={s.CountriesContainer}>
            <Country/>
        </div>
    )
}

export default CountriesContainer;