import React, {useState, setSate} from "react";
import s from './Adder.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

const Adder = (props) =>{  
    const [state, setState] = useState({
        inputValuePe: '',
        inputValueTy: '',
        inputValueN: '',
        inputValueTh: '',
        inputValuePa: '',
        inputValueR: '',
        Name: ''
    })

    const updPerson = (e) => {
        var inputValuePe = e.target.value
        setState({...state, inputValuePe})
        props.updateStringPerson(inputValuePe)
    }

    const updType = (e) => {
        var inputValueTy = e.target.value
        setState({...state, inputValueTy})
        props.updateStringType(inputValueTy)
    }

    const updName = (e) => {
        var inputValueN = e.target.value
        setState({...state, inputValueN})
        props.updateStringName(inputValueN)
    }

    const updTheme = (e) => {
        var inputValueTh = e.target.value
        setState({...state, inputValueTh})
        props.updateStringTheme(inputValueTh)
    }

    const updPage = (e) => {
        var inputValuePa = e.target.value
        setState({...state, inputValuePa})
        props.updateStringPerson(inputValuePa)
    }

    const updRating = (e) => {
        var inputValueR = e.target.value
        setState({...state, inputValueR})
        props.updateStringRating(inputValueR)
    }

    const updId = (e) => {
        var newId = props.info.length 
        props.updateIntId(newId)
    }

    const createName = (e) => {
        var Name = e.target.value
        setState({...state, Name})
        props.createTableName(Name)
    }

    const newTable = () => {
        console.log(1234);
        props.addTable()
        setState({...state, Name: ''})
    }

    const addString = () =>{
        updId()
        props.addString(props.index)
        setState({...state,
            inputValuePe: '',
            inputValueTy: '',
            inputValueN: '',
            inputValueTh: '',
            inputValuePa: '',
            inputValueR: ''})
    }

    return (
    <div>
        <Modal show={props.show} onHide={props.handleClose} contentClassName={s.modal}>
        <Modal.Header closeButton>
            <Modal.Title>{props.text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className={s.body}>
            <form>
                {(props.name === true) ? (
                    <div>
                        <div className={s.group}>      
                            <input type="text" required value={state.Name} onChange={createName}/>
                            <span className={s.bar}></span>
                            <label className={s.label}>Название таблицы</label>
                        </div>
                    </div>) : (
                    <div>
                        <div className={s.group}>      
                            <input type="text" required value={state.inputValuePe} onChange={updPerson}/>
                            <span className={s.bar}></span>
                            <label className={s.label}>Преподаватель</label>
                        </div>
                        <div className={s.group}>      
                            <input type="text" required value={state.inputValueTy} onChange={updType}/>
                            <span className={s.bar}></span>
                            <label className={s.label}>Публикация</label>
                        </div>
                        <div className={s.group}>      
                            <input type="text" required value={state.inputValueN} onChange={updName}/>
                            <span className={s.bar}></span>
                            <label className={s.label}>Название</label>
                        </div>
                        <div className={s.group}>      
                            <input type="text" required value={state.inputValueTh} onChange={updTheme}/>
                            <span className={s.bar}></span>
                            <label className={s.label}>Тематика</label>
                        </div>
                        <div className={s.group}>      
                            <input type="text" required value={state.inputValuePa} onChange={updPage}/>
                            <span className={s.bar}></span>
                            <label className={s.label}>Страниц</label>
                        </div>
                        <div className={s.group}>      
                            <input type="text" required value={state.inputValueR} onChange={updRating}/>
                            <span className={s.bar}></span>
                            <label className={s.label}>Рейтинг</label>
                        </div>
                    </div>
                )}
            </form>
            </div>
        </Modal.Body>
        <Modal.Footer className={s.footer}>
            <Button variant="primary" onClick={()=>{
                (props.name === true) ? (newTable()) : (addString())
                props.handleClose()
            }} size='lg' className={s.button}>
            Save Changes
            </Button>
            {(props.path) ? (
            <NavLink to={props.path}>
                <Button variant="secondary" onClick={props.handleClose} size='lg' className={s.button}>
                    Close
                </Button>
            </NavLink>):(
                <Button variant="secondary" onClick={props.handleClose} size='lg' className={s.button}>
                    Close
                </Button>
            )}
        </Modal.Footer>
        </Modal>
    </div>
    )
}

export default Adder