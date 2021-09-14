import React, {useState, setSate} from "react";
import s from './Main.module.css'
import Button from "../button/Button";

const Main = () =>{
    
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
                        Загорелось солнце над ебалом
                        Сутки позади, но мы не спали
                        Молодые боссы, будто Пабло
                        Едем забирать пакеты с налом (Я, я, я)
                    </div>) : (<></>)}
            </div>
            <div className={s.button}>
                <div className={s.b}>
                    <div onMouseLeave={(e) => {handleMouseLeave(e)}} 
                        onMouseEnter={(e) => {handleMouseEnter(e)}}
                        className={s.block}>
                        <Button width='400' height='100' text='ТАБЛИЦА' path='/table'/>
                    </div>
                </div>
                <div className={s.b}>
                    <div onMouseLeave={(e) => {handleMouseLeave(e)}} 
                        onMouseEnter={(e) => {handleMouseEnter(e)}}
                        className={s.block}>
                        <Button width='400' height='100' text='СЛАВА' />
                    </div>
                </div>
                <div className={s.b}>
                    <div onMouseLeave={(e) => {handleMouseLeave(e)}} 
                        onMouseEnter={(e) => {handleMouseEnter(e)}}
                        className={s.block}>
                        <Button width='400' height='100' text='УКРАИНЕ'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main