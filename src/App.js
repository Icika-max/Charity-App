import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Char from './components/charity/Char';
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <NavBar>
        <Routes>
          <Route path='/charity'>
            <Char/>
          </Route>
          <Route path='list'>
            <List />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          </Routes>
      </NavBar>
      
    </div>
  );
}

export default App;
