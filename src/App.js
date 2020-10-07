import React from 'react';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Navigation from './Navigation.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Contact' component={Contact} />
          <Route path='/About' component={About} />
          <Route path='/' component={() => <div>err. 404!</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
