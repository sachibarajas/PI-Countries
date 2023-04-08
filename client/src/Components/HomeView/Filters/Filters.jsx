import s from './Filters.module.css'

const Filters =()=>{
    return(
        <div className={s.Filters}>
            <p className= {s.label} >Search Country by Name</p>
            <input type="text" className={s.Input} placeholder="Country's name"/>
            <hr className={s.divLine}/>
            <p className= {s.label}>Filter by continent</p>
            <div className={s.Continents} >
                <label className={s.label} >
                    <input type="checkbox" id='Africa' value='Africa' />
                    Africa
                </label>
                <label className={s.label}>
                    <input type="checkbox" id='Americas' value='Americas' />
                    Americas
                </label>
                <label className={s.label}>
                    <input type="checkbox" id='Asia' value='Asia' />
                    Asia
                </label>
                <label className={s.label}>
                    <input type="checkbox" id='Europe' value='Europe' />
                    Europe
                </label>
                <label className={s.label}>
                    <input type="checkbox" id='Oceania' value='Oceania' />
                    Oceania
                </label>
            </div>

            <p className={s.label}>Filter by Activity</p>
            <select name="activities" id="activities" className={s.Select}>
                <option value="" disabled selected hidden className={s.Placeholder}>Activity</option>
            </select>
            <hr className={s.divLine}/>
        </div>
    )
}

export default Filters;