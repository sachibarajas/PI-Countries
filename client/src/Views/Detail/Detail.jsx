import s from './Detail.module.css';
import NavBar from '../../Components/NavBar/NavBar';
import detailFooter from '../../Assets/Images/detailFooter.png';
import detailCard from '../../Assets/Images/detailCard.png';
import dummyFlag from '../../Assets/Images/dummyflag.png';

const Detail = ()=>{

    return(
       <div className={s.Detail}>
            <NavBar/>
            <img src={detailFooter} alt="footer" className={s.Footer} />
            <img src={detailCard} alt="detail card" className={s.detailCard}/>
            <img src={dummyFlag} alt="flag" className={s.Flag}/>
            <div className={s.Info}>
                <div className={s.infoItem}>
                    <p className={s.Label}>Id: </p>
                    <p className={s.Data}>COL</p>
                </div>
                <div className={s.infoItem}>
                    <p className={s.Label}>Name: </p>
                    <p className={s.Data}>Colombia</p>
                </div>
                <div className={s.infoItem}>
                    <p className={s.Label}>Capital: </p>
                    <p className={s.Data}>Bogota</p>
                </div>  
                <div className={s.infoItem}>
                    <p className={s.Label}>Continent: </p>
                    <p className={s.Data}>Americas</p>
                </div>
                <div className={s.infoItem}>
                    <p className={s.Label}>Sub Region: </p>
                    <p className={s.Data}>South America</p>
                </div>
                <div className={s.infoItem}>
                    <p className={s.Label}>Official Name: </p>
                    <p className={s.Data}>Republic of Afghanistan</p>
                </div>
                <div className={s.infoItem}>
                    <p className={s.Label}>Area: </p>
                    <p className={s.Data}>1029382039</p>
                </div>
                <div className={s.infoItem}>
                    <p className={s.Label}>Population: </p>
                    <p className={s.Data}>50989867</p>
                </div>
                <div className={s.activityBox}>
                    <p className={s.Label}>Activities: </p>
                    <div className={s.Activities}></div>
                </div>
            </div>
       </div>
    )
}

export default Detail;