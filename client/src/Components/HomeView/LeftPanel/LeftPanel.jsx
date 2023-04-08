import s from './LeftPanel.module.css';
import Filters from '../Filters/Filters';
import Order from '../Order/Order';

const LeftPanel =()=>{
    return(
        <div className={s.leftPanel}>
            <p className= {s.title} >Countries App</p>
            <Filters/>
            <Order/>
        </div>
    )
}

export default LeftPanel;