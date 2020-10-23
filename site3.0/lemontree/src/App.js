import React from 'react';

import { Route,
         Redirect,
         Switch,
         BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Bidding from './components/Bidding';
import IdeaNetwork from './components/IdeaNetwork';
import CaseStudies from './components/CaseStudies';
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
              <Route path='/profile' exact component={Homepage} />
              <Route path='/case-studies' exact component={CaseStudies} />
              <Redirect to='/' />
            </Switch>
            <Footer />
          </Router>
        </div>
    );
}

export default App;
 

