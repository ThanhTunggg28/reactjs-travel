import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Switch>
          <Route path="/" exact component=
          {Home} /> 
        </Switch> */}
        <HeroSection />
        <Cards />
      </Router>
    </div>
  );
}

export default App;
