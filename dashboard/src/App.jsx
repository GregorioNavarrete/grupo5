import React from 'react';
import Home from './views/home.jsx';
import About from './views/about.jsx';
import Contact from './views/contact.jsx';
import { Link , Route } from 'react-router-dom';

function App() {
  return (
    <>
      
      <div>
        <Link to='/'>Home</Link> <br/>
        <Link to='/about'>About</Link> <br/>
        <Link to='/contact'>Contact</Link> <br/>
        <Link to='/no-existe'>No existe</Link> <br/>
        <hr/>
        
      </div>
    </>
  )
}

export default App;
