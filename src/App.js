import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Views/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import NotFound from './Views/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container-global">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
