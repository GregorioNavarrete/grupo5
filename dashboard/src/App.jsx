import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './views/home.jsx';
import About from './views/about.jsx';
import Contact from './views/contact.jsx';

function App() {
  return (
    <>
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
    </>
  )
}

export default App;
