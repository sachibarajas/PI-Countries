import s from './Landing.module.css';
// import { Link } from 'react-router-dom';
import btnImg from '../../Assets/Images/startBtn.png';
import gitHubIcon from '../../Assets/Images/github.png';
import linkedInIcon from '../../Assets/Images/linkedin.png'

const Landing = () => {

    return (
        <div className={s.landingContainer}>

            <p className={s.presentation}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a augue vel ante pretium semper in vel dolor. Nam iaculis erat at enim scelerisque dictum. Aenean dui lacus, congue eget.</p>
            
            <a href='http://localhost:3000/home'>
                <img src={btnImg} alt="halla" className={s.startBtnImg}/>
            </a>

            <div className={s.socialMedia}>
                <a href='https://github.com/sachibarajas/PI-Countries-main'>
                    <img src={gitHubIcon} alt="halla" className={s.socialMediabtn}/>
                </a>
                <a href='https://www.linkedin.com/in/santiago-barajas-362011248'>
                    <img src={linkedInIcon} alt="halla" className={s.socialMediabtn}/>
                </a>
            </div>
            
        

        </div>
    )
}

export default Landing;