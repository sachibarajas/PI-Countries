import s from './RightPanel.module.css';
import NavBar from '../../NavBar/NavBar';
import CountriesContainer from '../CountriesContainer/CountriesContainer';
import Footer from '../Footer/Footer';

const RightPanel =()=>{
    return(
        <div className={s.rightPanel}>
            <NavBar/>
            <CountriesContainer/>
            <Footer/>
        </div>
    )
}

export default RightPanel;