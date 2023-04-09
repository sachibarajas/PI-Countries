import s from './LeftPanel.module.css';
import titleImg from '../../../Assets/Images/createActivity.png';
import createBtn from '../../../Assets/Images/createBtn.png';
const LeftPanel = ()=>{

    return(
        <div className={s.LeftPanel}>
            
            <img src={titleImg} alt="" className={s.titleImg}/>

           <div className={s.Form}>
                <form action="">
                    <div className={s.Input}>
                        <label htmlFor="" className={s.Label}>Name: </label>
                        <input type="text"  className={s.txtInput}/>
                    </div>
                    
                    <div className={s.radioButtons}>
                        <label htmlFor="" className={s.Label}>Dificulty:</label>
                        
                        <div className={s.Options}>
                            <div className={s.radioOption}>
                                <input type="radio" id='option1' name='difficulty' value={1} className={s.Option}/>
                                <label for="option1" className={s.Label}>1</label>
                            </div>
                            <div className={s.radioOption}>
                                <input type="radio" id='option2' name='difficulty' value={2} className={s.Option}/>
                                <label for="option1" className={s.Label}>2</label>
                            </div>
                            <div className={s.radioOption}>
                                <input type="radio" id='option3' name='difficulty' value={3} className={s.Option}/>
                                <label for="option1" className={s.Label}>3</label>
                            </div>
                            <div className={s.radioOption}>
                                <input type="radio" id='option4' name='difficulty' value={4} className={s.Option}/>
                                <label for="option1" className={s.Label}>4</label>
                            </div>
                            <div className={s.radioOption}>
                                <input type="radio" id='option5' name='difficulty' value={5} className={s.Option}/>
                                <label for="option1" className={s.Label}>5</label>
                            </div>
                        </div>
                    </div>

                    <div className={s.Input}>
                        <label htmlFor="" className={s.Label}>Duration:     </label>
                        <input type="text" className={s.txtInput}/>
                    </div>

                    <div className={s.Input}>
                        <label htmlFor="" className={s.Label}>Season:     </label>
                        <select name="season" id="season" className={s.txtInput}>
                            <option value="" disabled selected hidden className={s.Label}>Choose one</option>
                            <option value="Summer" className={s.Label}>Summer</option>
                            <option value="Spring" className={s.Label}>Spring</option>
                            <option value="Fall" className={s.Label}>Fall</option>
                            <option value="Winter" className={s.Label}>Winter</option>
                        </select>
                    </div>

                    <div className={s.InputCountries}>
                        <div className={s.Input}>
                            <label htmlFor="" className={s.Label}>Countries:  </label>
                            <input type="text" className={s.txtInput}/>
                        </div>
                        <button className={s.addBtn}>Add</button>
                    </div>

                    <div className={s.countriesPanel}>
                       
                    </div>

                    <img src={createBtn} alt="" className={s.createBtn}/>

                </form>
           </div>
        </div>
    )
}

export default LeftPanel;