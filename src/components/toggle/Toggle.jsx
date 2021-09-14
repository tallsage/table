import React from "react";
import s from './Toggle.module.css'

const Toggle = (props) =>{

    return(
        <label className={s.label}>
            <div className={s.toggle}>
                <input
                    className={s.toggleState}
                    type='checkbox'
                    name='check'
                    value='check'
                    id={props.id}
                    onChange={props.toggleHandler}
                />
                {/* {console.log(chbox.checked)} */}
                <div className={s.toggleInner}>
                    <div className={s.indicator}></div>
                </div>
                <div className={s.activeBg}></div>
            </div>
        </label>
    )
}

export default Toggle