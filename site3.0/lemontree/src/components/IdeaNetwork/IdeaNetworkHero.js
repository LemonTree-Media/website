import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

/* import HeroNavbar from './IdeaNetworkHero/HeroNavbar'; */

function IdeaNetworkHero() {
    return (
        <Jumbotron className="mb-3 p-5">
          {/* <div className="mb-5 text-center">
              <HeroNavbar/>
              </div> */}
          
          <div className="text-center">
            <Button size="sm">Get Started</Button>
            <p>
              Get in touch with us to begin a project
            </p>
          </div>
        </Jumbotron>
    );
}

export default IdeaNetworkHero;

