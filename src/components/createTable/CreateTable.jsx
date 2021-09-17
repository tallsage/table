import React from "react";
import s from './CreateTable.module.css'
import Adder from "../adder/Adder";

const createTable = (props) =>{
    
    return(
        <div>
            <Adder
                text={'Введите название таблицы'}
                name={true}
                show={true} 
                createTable={props.createTableName}
                addTable={props.addTable}
            />
        </div>
    )
}

export default createTable