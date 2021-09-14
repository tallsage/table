import React, {useState, setSate} from "react";
import s from './Table.module.css'
import Button from "../button/Button";

const Table = () =>{

    const [state, setState] = useState({
        rows: 0
    })

    const getRows = () =>{
        if (state.rows < 5) {
            
        }
    }

    const rowFunc = () => {
        
    }

    return(
        <div>
            <table className={s.seperate}>
            <tbody>
                <tr>
                    <th>Преподаватель</th>
                    <th>Публикация</th> 
                    {/*сверху сролер и выбор из учеб публ или все публ */}
                    <th>Название</th>
                    <th>Тематика</th>
                    <th>Страниц</th>
                    <th>Рейтинг</th>
                </tr>
                <tr>
                    <td>Microsoft</td>
                    <td>20.3</td>
                    <td>30.5</td>
                    <td>23.5</td>
                    <td>40.3</td>
                </tr>
                <tr>
                    <td>Google</td>
                    <td>50.2</td>
                    <td>40.63</td>
                    <td>45.23</td>
                    <td>39.3</td>
                </tr>
                <tr>
                    <td>Apple</td>
                    <td>25.4</td>
                    <td>30.2</td>
                    <td>33.3</td>
                    <td>36.7</td>
                </tr>
                <tr>
                    <td>IBM</td>
                    <td>20.4</td>
                    <td>15.6</td>
                    <td>22.3</td>
                    <td>29.3</td>
                </tr>
            </tbody></table>
                <div className={s.leftB}>
                    <Button width='200' height='80' text='НАЗАД' path='/'/>
                </div>
        </div>
    )
}

export default Table