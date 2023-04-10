import s from './RightPanel.module.css';
import NavBar from '../../NavBar/NavBar';
import CountriesContainer from '../CountriesContainer/CountriesContainer';
import Footer from '../../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterCountries } from '../../../redux/Actions/actions';

const RightPanel =()=>{
    const dispatch = useDispatch();
    const countries = useSelector(state=>state.FilteredCountries);
    useEffect(()=>{
        dispatch(filterCountries());
    },[])

    // paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexOfLastCountry = currentPage*countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry,indexOfLastCountry);

    const paginado = (pageNumber)=>{
        setCurrentPage(pageNumber);
    }


    return(
        <div className={s.rightPanel}>
            <NavBar/>
            <CountriesContainer countries={currentCountries}/>
            <Footer 
                itemsPerpage={countriesPerPage}
                allItems={countries.length}
                paginado={paginado}
            />
        </div>
    )
}

export default RightPanel;