import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Char from './components/charity/Char';
import Home from './components/LandingPage/Home'
import Nav from './components/Nav'
import List from './components/charity/List'


function App() {
  return (
    <div className="App">
      <Nav>
        <Routes>
          <Route path='/charity' >
            <Char/>
          </Route>
          <Route path='list'>
            <List />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          </Routes>
      </Nav>
      
    </div>
  );
}

export default App;
