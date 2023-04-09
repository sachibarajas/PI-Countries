import s from './RightPanel.module.css';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import ActivitiesContainer from '../ActivitiesContainer/ActivitiesContainer';

const RightPanel = ()=>{

    return(
        <div className={s.RightPanel}>
            <NavBar/>
            <ActivitiesContainer/>
            <Footer/>
        </div>
    )
}

export default RightPanel;