import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>{/*page 디렉토리로 접근하는 거*/}
            <Route path='/' exact component={Home} />
            <Route path='/reports' component={Reports} />
            <Route path='/products' component={Products} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
          </Switch>
      </Router>
    </>
  );
}

export default App;