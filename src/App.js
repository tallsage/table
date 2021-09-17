import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Main from './components/main/Main'
import Table from './components/table/Table'


const App = (props) => {

  return (
    <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route exact path='/' render={()=><Main/>}/>
        <Route exact path='/table' render={()=>
          <Table 
            info={props.state[0].table}
            updateStringPerson={props.updateStringPerson}
            addString={props.addString}
          />}
        />
      </Switch>
    </div>
      
    </BrowserRouter>
  );
}

export default App;
