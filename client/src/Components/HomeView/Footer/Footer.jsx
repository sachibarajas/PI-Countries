import s from './Footer.module.css';
import leftArrow from '../../../Assets/Images/leftArrrow.png';
import rightArrow from '../../../Assets/Images/rightArrow.png';

const Footer =()=>{
    return(
        <div className={s.Footer}>
            <img src={leftArrow} alt="left" className={s.Arrow}/>
            <p className={s.currentPage}>12</p>
            <p className={s.Pages}>out of 25</p>
            <img src={rightArrow} alt="right" className={s.Arrow}/>
        </div>
    )
}

export default Footer;