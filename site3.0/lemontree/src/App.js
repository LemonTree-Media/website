import React from 'react';
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
