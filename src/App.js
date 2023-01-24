import './App.css';
import {Route, Switch} from 'react-router-dom'
import Char from './components/charity/Char';
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <NavBar>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/charity'>
            <Charity />
          </Route>
          <Route path='list'>
            <List />
          </Route>
        </Switch>
      </NavBar>
      
    </div>
  );
}

export default App;
