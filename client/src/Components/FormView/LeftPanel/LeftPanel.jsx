import s from './LeftPanel.module.css';
import Autosuggest from 'react-autosuggest';
import titleImg from '../../../Assets/Images/createActivity.png';
import createBtn from '../../../Assets/Images/createBtn.png';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const LeftPanel = ()=>{

    const countriesList = useSelector(state=>state.Countries);
    const [country, setCountry] = useState('')
    const [ form, setForm ] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries:[]
    })

    const [errors,setErrors] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
    })

    const validate = (state) =>{
        if (state.name === '') {
            setErrors({...errors, name: "The name can't be empty"})
        } else {
            setErrors({...errors,name:""})
        }

    }

    
    const handleChange = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        if (property==='country') {
            setCountry(value)
        }else{
            validate({...form, [property]:value})
            setForm({...form, [property]:value})}
    }

    const handleCountries = (e)=> {
        e.preventDefault();
        console.log(`valor ingresado: ${country}`);
        for (let i = 0; i < countriesList.length; i++) {
            // console.log(countriesList[i].id);
            // console.log(countriesList[i].name)
            const compValue= country.toLowerCase()
            if (compValue === countriesList[i].name.toLowerCase()) {
                console.log(countriesList[i].id);
                setForm({...form, countries: [...form.countries,countriesList[i].id]});
                setCountry("");
                break;
            }
        } 
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const response = axios.post('http://localhost:3001/activities',form)
        .then(res=>alert(res))
    }

    return(
        <div className={s.LeftPanel}>

            <img src={titleImg} alt="" className={s.titleImg}/>

           <div className={s.Form}>
                <form action="" onSubmit={handleSubmit}>
                    
                    <div className={s.inputBox}>
                        <div className={s.Input}>
                            <label htmlFor="" className={s.Label}>Name: </label>
                            <input 
                                type="text"  
                                className={s.txtInput} 
                                value={form.name}
                                onChange={handleChange}
                                name='name' 
                                placeholder="Activity's name..."   
                            />
                        </div>
                        {errors.name && <div className={s.errorMsg}>{errors.name}</div>}
                    </div>
                    
                    
                    <div className={s.inputBox}>
                        <div className={s.Input}>
                            <label htmlFor="" className={s.Label}>Difficulty:     </label>
                            <select name="difficulty" id="difficulty" className={s.txtInput} value={form.difficulty} onChange={handleChange}>
                                <option value="" disabled selected hidden className={s.Label}>Choose one</option>
                                <option value="1" className={s.Label}>1</option>
                                <option value="2" className={s.Label}>2</option>
                                <option value="3" className={s.Label}>3</option>
                                <option value="4" className={s.Label}>4</option>
                                <option value="5" className={s.Label}>5</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className={s.inputBox}>
                        <div className={s.Input}>
                            <label htmlFor="" className={s.Label} >Duration:     </label>
                            <input 
                                type="number" 
                                min='1'
                                max='12'
                                className={s.txtInput} 
                                value={form.duration} 
                                onChange={handleChange}
                                name='duration'
                                placeholder='Hours...'
                            />
                        </div>
                    </div>

                    <div className={s.inputBox}>
                        <div className={s.Input}>
                            <label htmlFor="" className={s.Label}>Season:     </label>
                            <select name="season" id="season" className={s.txtInput} value={form.season} onChange={handleChange}>
                                <option value="" disabled selected hidden className={s.Label}>Choose one</option>
                                <option value="Summer" className={s.Label}>Summer</option>
                                <option value="Spring" className={s.Label}>Spring</option>
                                <option value="Fall" className={s.Label}>Fall</option>
                                <option value="Winter" className={s.Label}>Winter</option>
                            </select>
                        </div>
                    </div>

                    <div className={s.InputCountries}>


                        <div className={s.Input}>
                            <label htmlFor="" className={s.Label}>Countries:  </label>
                            <input type="text" className={s.txtInput} value={country} name='country' onChange={handleChange}/>
                        </div>
                        <button className={s.addBtn} onClick={handleCountries} name='addDtn' value={country} >Add</button>
                    </div>

                    <div className={s.countriesPanel}>
                       
                    </div>
                    {/* <img src={createBtn} alt="" className={s.createBtn}/> */}
                    <button type='submit' >
                        submit
                    </button>
                   

                </form>
           </div>
        </div>
    )
}

export default LeftPanel;