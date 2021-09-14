import React from "react";
import s from './Button.module.css'
import { NavLink } from "react-router-dom";

const Button = (props) =>{

    const width = props.width
    const height = props.height

    return(
        <div>
            {(props.path !== undefined) ? (<NavLink to={props.path}>
                <button className={s.button} style={{width: width + 'px', height: height + 'px'}}>
                    {props.text}
                </button>
            </NavLink>)
            : (
                <button className={s.button} style={{width: width + 'px', height: height + 'px'}}>
                    {props.text}
                </button>)}
        </div>
    )
}

export default Button