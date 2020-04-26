import React from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer'
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import About from './Components/About'
import DigiRes from './Components/DigiRes'
import Container from "react-bootstrap/Container";
import './CSS/App.css';

function App() {
  return (
      <HashRouter>
        <Container className={"customCon"}>
            <Navigation/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/digiRes" component={DigiRes}/>
                <Route component={Error}/>
              </Switch>
              <Footer/>
        </Container>
      </HashRouter>
  );
}

export default App;
