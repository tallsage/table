import React, {useState, setSate, useEffect } from "react";
import s from './Table.module.css'
import Button from "../button/Button";
import Toggle from "../toggle/Toggle";
var _ = require('lodash')

const Table = (props) =>{

    const [state, setState] = useState({
        rows: true,
        toggle: false,
        info: null,
        flag: true
    })

    useEffect(() => {
        
      });

    const formatInfo = () =>{
        if(props.info.length !== 0){
            if(state.toggle){
                var buff = []
                props.info.forEach(el =>{
                    if(el.Type === 'Учебно-методическая'){
                        buff.push(el)
                    }
                })
                    if(buff !== state.info && state.flag){
                        setState({...state, info: buff, rows: false, flag:false})
                    }
            }else{
                if(props.info !== state.info){
                    setState({...state, info: props.info, rows: false, flag: true})
                }
            }
        }
    }
    formatInfo()
    const getRows = (key) =>{
        if (state.rows) {
            return (_.times(5, rowFunc))
        }else{
            return state.info.map(el => rowFunc(el, key))
        }
    }

    const rowFunc = (el) => {
        if (state.rows){
            return (
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            )
        }else{
            return (
                <tr>
                    <td>{el.Person}</td>
                    <td>{el.Type}</td>
                    <td>{el.Name}</td>
                    <td>{el.Theme}</td>
                    <td>{el.Page}</td>
                    <td>{el.Rating}</td>
                </tr>
            )
        }
    }

    const toggleHandler = (e) => {
        const { target } = e;
        const value = target.checked
        setState({...state, toggle: value})
      };

    return(
        <div>
            <table className={s.seperate}>
            <tbody>
                <tr>
                    <th>Преподаватель</th>
                    <th className={s.publish}>
                        <p>Публикация</p>
                        <Toggle id={'one'} toggleHandler={toggleHandler}/>
                    </th> 
                    <th>Название</th>
                    <th>Тематика</th>
                    <th>Страниц</th>
                    <th>Рейтинг</th>
                </tr>
                {getRows()}
            </tbody></table>
                <div className={s.leftB}>
                    <Button width='200' height='80' text='НАЗАД' path='/'/>
                </div>
        </div>
    )
}

export default Table