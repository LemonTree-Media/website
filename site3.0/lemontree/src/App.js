import React from 'react';
<<<<<<< HEAD
import { Route,
         Redirect,
         Switch,
         BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Bidding from './components/Bidding';
import IdeaNetwork from './components/IdeaNetwork';
import Footer from './components/Footer';

function App() {
    return (
        <div className="lt-app">
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Homepage} />
              <Route path='/bidding' exact component={Bidding} />
              <Route path='/idea' exact component={IdeaNetwork} />

              <Redirect to='/' />
            </Switch>
            <Footer />
          </Router>
        </div>
    );
}

export default App;
 
=======
import './index.scss';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

function App() {
  return (
      <div className="lt-app">
        <Navbar />
        <Homepage />
        <Footer />
      </div>
  );
}

export default App;
>>>>>>> Michael
