import React, { Component } from 'react';
import Nav from './Nav';
import PlayerContainer from './PlayerContainer';
import AutoComplete from './AutoComplete';

const App = ({children}) => {
  
  return (
    <div className="test">
      <Nav/>
      <AutoComplete/>
      {children}
      <PlayerContainer/>
    </div>
  );
};

export default App;

