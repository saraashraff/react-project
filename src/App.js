import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import {Switch} from 'react-router';
import SignUp from './components/pages/SignUp';
import Search from './components/pages/Search';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/sign-up' component={SignUp} />
        </Switch> 
      </Router>
     </div>
  );
}

export default App;