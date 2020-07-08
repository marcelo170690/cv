import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Main from './Views/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container-global">
        <Switch>
          <Route exact path="/" component={Main}/>
          {/*<Route exact path="/main" component={Play}/>*/}
        </Switch>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
