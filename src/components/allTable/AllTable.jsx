import React from "react";
import s from './AllTable.module.css'
import Button from "../button/Button";

const AllTable = (props) =>{
    
    const createButtons = () =>{
        var i = 0
        return props.state.map(el =>{
            i = i+1
            return (
                <div className={s.b}>
                <div className={s.block}>
                    <Button width='530' height='100' text={el.name} path={'/table/' + i}/>
                </div>
            </div>
            )
        })
    }

    return(
            <div className={s.button}>
                {createButtons()}
            </div>
    )
}

export default AllTable