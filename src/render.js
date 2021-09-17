import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addString, updateStringPerson, updateStringType, 
        updateStringName, updateStringTheme, updateStringPage, 
        updateStringRating, updateIntId, createTableName, 
        addTable} from './redux/state'


export var renderEntireTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} addString={addString} 
            updateStringPerson={updateStringPerson}
            updateStringType={updateStringType}
            updateStringName={updateStringName}
            updateStringTheme={updateStringTheme}
            updateStringPage={updateStringPage}
            updateStringRating={updateStringRating}
            updateIntId={updateIntId}
            createTableName={createTableName}
            addTable={addTable}
          />
        </React.StrictMode>,
        document.getElementById('root')
      );
}