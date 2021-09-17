import React, {useState, setSate} from "react";
import s from './Main.module.css'
import Button from "../button/Button";

const Main = (props) =>{
    
    const [state, setState] = useState({
        id: undefined
    })

    const handleMouseEnter = (e) =>{
        var value = e.target.innerText
        setState({...state, id:value})
    }

    const handleMouseLeave = () =>{
        setState({...state, id:undefined})
    }

    return(
        <div className={s.main}>
            <div className={s.left}>
                {(state.id === 'ТАБЛИЦА') ? 
                    (<div className={s.hiden}>
                        Нажатие на эту кнопку 
                        перекинет вас на первую
                        из всех таблиц
                    </div>) : (
                        (state.id === 'ВЫБОР ТАБЛИЦЫ') ? 
                        (<div className={s.hiden}>
                            Нажатие на эту кнопку 
                            перекинет вас на выбор 
                            нужной для просмотра 
                                   таблицу
                        </div>) : (
                            (state.id === 'ДОБАВИТЬ ТАБЛИЦУ') ? 
                            (<div className={s.hiden}>
                                Нажатие на эту кнопку 
                                перекинет вас на 
                                создание новой таблицы
                            </div>) : (<></>)
                        )
                    )}
            </div>
            <div className={s.button}>
                <div className={s.b}>
                    <div onMouseLeave={(e) => {handleMouseLeave(e)}} 
                        onMouseEnter={(e) => {handleMouseEnter(e)}}
                        className={s.block}>
                        <Button width='530' height='100' text={props.state[0].name} path='/table?1'/>
                    </div>
                </div>
                <div className={s.b}>
                    <div onMouseLeave={(e) => {handleMouseLeave(e)}} 
                        onMouseEnter={(e) => {handleMouseEnter(e)}}
                        className={s.block}>
                        <Button width='530' height='100' text='ВЫБОР ТАБЛИЦЫ' path='/allTable'/>
                    </div>
                </div>
                <div className={s.b}>
                    <div onMouseLeave={(e) => {handleMouseLeave(e)}} 
                        onMouseEnter={(e) => {handleMouseEnter(e)}}
                        className={s.block}>
                        <Button width='530' height='100' text='ДОБАВИТЬ ТАБЛИЦУ' path='/createTable'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main