import LeftPanel from "../../Components/FormView/LeftPanel/LeftPanel";
import RightPanel from "../../Components/FormView/RightPanel/RightPanel";
import s from './Form.module.css'
const Form = ()=>{

    return(
        <div className={s.Form}>
            <LeftPanel/>
            <RightPanel/>
        </div>
    )
}

export default Form;