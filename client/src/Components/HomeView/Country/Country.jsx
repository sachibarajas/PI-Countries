import s from './Country.module.css';
import backGround from '../../../Assets/Images/countryCard2.png';

import plusBtn from '../../../Assets/Images/plusBtn.png'

const Country =(props)=>{
    const {flag, name, continent} = props;
    return(
        <div className={s.Country}>
            <img src={backGround} alt="" className={s.backGroundImg} />
            <div className={s.Title}>
                <p className={s.Tag}>COUNTRY</p>
                <hr className={s.divLine}/>
            </div >
            <img src={flag} alt="" className={s.Flag}/>
            <div className={s.Info}>
                <p className={s.Name}>{name}</p>
                <p className={s.Continent}>{continent}</p>
                <div className={s.moreInfo}>
                    <img src={plusBtn} alt="" className={s.plusBtn}/>
                    <p className={s.infoWd}>info</p>
                </div>
            </div>
        </div>
    )
}

export default Country;