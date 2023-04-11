import { useSelector } from 'react-redux';
import s from './Filters.module.css';
import { useState } from 'react';


const Filters =()=>{

    const activities = useSelector(state => state.Activities)
    const [filters, setFilters] = useState({
        
    })

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
                {
                    activities.map(activity =>(
                        <option value={activity.name} >{activity.name}</option>
                    ))
                }
            </select>
            <hr className={s.divLine}/>
            
            {/* order */}
            <div className={s.Order}>
            <p className={s.Label}>Sort Countries</p>
            <select name="orderBy" id="orderBy" className={s.Select}>
                <option value="" disabled selected hidden className={s.Label}>By</option>
                <option value="name" className={s.Label}>Name</option>
                <option value="population" className={s.Label}>Population</option>
            </select>

            <select name="order" id="order" className={s.Select}>
                <option value="" disabled selected hidden className={s.Label}>Order</option>
                <option value="DESC" className={s.Label}>Descending</option>
                <option value="ASC" className={s.Label}>Ascending</option>
            </select>
        </div>
        </div>
        
    )
}

export default Filters;