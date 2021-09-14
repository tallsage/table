import './App.css';
import React, { useState, setState } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Main from './components/main/Main'
import Table from './components/table/Table'


const App = (props) => {

var info = [{
  Person: 'Николаев Николай',
  Type: 'Учебно-методическая',
  Name: 'Как в React',
  Theme: 'Frontend',
  Page: '13',
  Rating: '3.14'
},
{
  Person: 'Андреев Андрей',
  Type: 'Докторская',
  Name: `А что Nod'a `,
  Theme: 'Backend',
  Page: '44',
  Rating: '2.7'
},
{
  Person: 'Андреев Андрей',
  Type: 'Учебно-методическая',
  Name: `express, а что, а вдруг`,
  Theme: 'FullStack',
  Page: '282',
  Rating: '4.20'
},
{
  Person: 'Николаев Николай',
  Type: 'Докторская',
  Name: 'MERN?',
  Theme: 'FullStack',
  Page: '322',
  Rating: '14.88'
}]

  return (
    <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route exact path='/' render={()=><Main/>}/>
        <Route exact path='/table' render={()=><Table info={info}/>}/>
      </Switch>
    </div>
      
    </BrowserRouter>
  );
}

export default App;
