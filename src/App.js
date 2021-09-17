import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Main from './components/main/Main'
import Table from './components/table/Table'
import AllTable from './components/allTable/AllTable'
import CreateTable from './components/createTable/CreateTable';

const App = (props) => {

  return (
    <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route exact path='/' render={()=><Main state={props.state}/>}/>
        <Route exact path='/table' render={()=>
          <Table 
            info={props.state[0].table}
            updateStringPerson={props.updateStringPerson}
            updateStringType={props.updateStringType}
            updateStringName={props.updateStringName}
            updateStringTheme={props.updateStringTheme}
            updateStringPage={props.updateStringPage}
            updateStringRating={props.updateStringRating}
            updateIntId={props.updateIntId}
            addString={props.addString}
          />}
        />
        <Route exact path='/allTable' render={()=>
          <AllTable state={props.state}/>}
        />
        <Route exact path='/createTable' render={()=>
          <CreateTable
            addTable = {props.addTable}
            createTableName = {props.createTableName}
          />}
        />
      </Switch>
    </div>
      
    </BrowserRouter>
  );
}

export default App;
