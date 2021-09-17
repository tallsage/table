import React, {useState, setSate} from "react";
import s from './Adder.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const Adder = (props) =>{  

    const [state, setState] = useState({
        inputValue: ''
    })

    const upd = (e) => {
        setState({...state, inputValue: e.target.value})
        props.updateStringPerson(e.target.value)
    }

    const addString = () =>{
        props.addString()
    }



    return (
    <div>
        <Modal show={props.show} onHide={props.handleClose} contentClassName={s.modal}>
        <Modal.Header closeButton>
            <Modal.Title>Введите информацию</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className={s.body}>
            <form>
                <div className={s.group}>      
                    <input type="text" required value={state.inputValue} onChange={upd}/>
                    <span className={s.bar}></span>
                    <label className={s.label}>Преподаватель</label>
                </div>
                <div className={s.group}>      
                    <input type="text" required/>
                    <span className={s.bar}></span>
                    <label className={s.label}>Публикация</label>
                </div>
                <div className={s.group}>      
                    <input type="text" required/>
                    <span className={s.bar}></span>
                    <label className={s.label}>Название</label>
                </div>
                <div className={s.group}>      
                    <input type="text" required/>
                    <span className={s.bar}></span>
                    <label className={s.label}>Тематика</label>
                </div>
                <div className={s.group}>      
                    <input type="text" required/>
                    <span className={s.bar}></span>
                    <label className={s.label}>Страниц</label>
                </div>
                <div className={s.group}>      
                    <input type="text" required/>
                    <span className={s.bar}></span>
                    <label className={s.label}>Рейтинг</label>
                </div>
            </form>
            </div>
        </Modal.Body>
        <Modal.Footer className={s.footer}>
            <Button variant="primary" onClick={()=>{
                addString()
                props.handleClose()
            }} size='lg' className={s.button}>
            Save Changes
            </Button>
            <Button variant="secondary" onClick={props.handleClose} size='lg' className={s.button}>
            Close
            </Button>
        </Modal.Footer>
        </Modal>
    </div>
    )
}

export default Adder