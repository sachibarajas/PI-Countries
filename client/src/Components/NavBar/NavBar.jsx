import { Link } from "react-router-dom";
import s from './NavBar.module.css';
import gitHubIcon from '../../Assets/Images/github.png';
import linkedInIcon from '../../Assets/Images/linkedin.png'

const NavBar = ()=>{
    return(
        <div className={s.navContainer}>
            <Link to='/home'className={s.routeLabel}>Countries</Link>
            <Link to='/createactivity' className={s.routeLabel}>Activities</Link>
            <Link to='/createactivity' className={s.routeLabel}>Create Activity</Link>
           <div className={s.socialMedia} >
                <a href='https://github.com/sachibarajas/PI-Countries-main'>
                    <img src={gitHubIcon} alt="" className={s.socialMediabtn} />
                </a>
                <a href='https://www.linkedin.com/in/santiago-barajas-362011248'>
                    <img src={linkedInIcon} alt="" className={s.socialMediabtn}/>
                </a>
           </div >
        </div>
    )
}

export default NavBar;