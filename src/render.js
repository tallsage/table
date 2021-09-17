import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addString, updateStringPerson} from './redux/state'


export var renderEntireTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} addString={addString} updateStringPerson={updateStringPerson}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}