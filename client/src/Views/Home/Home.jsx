import s from './Home.module.css';
import plane from '../../Assets/Images/airplane.png';
import LeftPanel from '../../Components/HomeView/LeftPanel/LeftPanel';
import RightPanel from '../../Components/HomeView/RightPanel/RightPanel';

const Home =()=>{
    return(
        <div className={s.Home}>
            <img src={plane} alt="plane" className={s.planeImg}/>
            <LeftPanel/>
            <hr className={s.divLine}/>
            <RightPanel/>

        </div>
    )
}

export default Home;