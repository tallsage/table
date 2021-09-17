import React from "react";
import s from './CreateTable.module.css'
import Adder from "../adder/Adder";

const createTable = (props) =>{

    const handleClose = () => {}

    return(
        <div>
            <Adder
                text={'Введите название таблицы'}
                name={true}
                show={true} 
                path={'/'}
                createTableName={props.createTableName}
                addTable={props.addTable}
                handleClose={handleClose}
            />
        </div>
    )
}

export default createTable