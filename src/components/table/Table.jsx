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
        toggleFlag: true,
        id: undefined,
        value: undefined,
        choiceFlag: true,
        innerText: undefined,
        default: true
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
                    if(buff !== state.info && state.toggleFlag){
                        setState({...state, info: buff, rows: false, toggleFlag:false})
                    }
            }else{
                if(state.id !== undefined && state.value !== undefined && state.choiceFlag){
                    var arr = []
                    
                    props.info.forEach(el =>{
                        switch (state.value) {
                            case 'Person':
                                if(el.Person === state.innerText){
                                    arr.push(el)
                                }
                                break;
                            case 'Type':
                                if(el.Type === state.innerText){
                                    arr.push(el)
                                }
                                break;
                            case 'Name':
                                if(el.Name === state.innerText){
                                    arr.push(el)
                                }
                                break;
                            case 'Page':
                                if(el.Page === state.innerText){
                                    arr.push(el)
                                }
                                break;
                            case 'Rating':
                                if(el.Rating === state.innerText){
                                    arr.push(el)
                                }
                                break;
                            default:
                                break;
                        }
                    })
                    console.log(arr);
                        if(arr !== state.info && state.choiceFlag){
                            setState({...state, info: arr, rows: false, choiceFlag: false, default: false})
                        }
                }else{
                    if(props.info !== state.info && state.default){
                        setState({...state, info: props.info, rows: false, toggleFlag: true, choiceFlag: true, value: undefined, id: undefined})
                    }
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
                    <td id={el.id} data-value={'Person'} onClick={clickHandler}>{el.Person}</td>
                    <td id={el.id} data-value={'Type'} onClick={clickHandler}>{el.Type}</td>
                    <td id={el.id} data-value={'Name'} onClick={clickHandler}>{el.Name}</td>
                    <td id={el.id} data-value={'Theme'} onClick={clickHandler}>{el.Theme}</td>
                    <td id={el.id} data-value={'Page'} onClick={clickHandler}>{el.Page}</td>
                    <td id={el.id} data-value={'Rating'} onClick={clickHandler}>{el.Rating}</td>
                </tr>
            )
        }
    }

    const toggleHandler = (e) => {
        const { target } = e;
        const value = target.checked
        setState({...state, toggle: value})
      };

    const handleDefault = () => {
        setState({ ...state, default: true})
    }

    const clickHandler = (e) => {
        const { target } = e;
        const id = target.id
        const value = (target.dataset.value !== undefined) ? (target.dataset.value) : (target.getAttribute('data-value'))
        const innerText = target.innerText
        setState({...state, id, value, innerText})
    }

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
                <div className={s.leftB} onClick={handleDefault}>
                    <Button width='200' height='80' text='full' onClick={handleDefault}/>
                </div>
        </div>
    )
}

export default Table