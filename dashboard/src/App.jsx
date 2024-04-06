import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link> <br/>
        <Link to='/about'>About</Link> <br/>
        <Link to='/contact'>Contact</Link> <br/>
        <Link to='/no-existe'>No existe</Link> <br/>
        <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>


       
      </div>
    </Router>
  )
}

export default App;
