import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import CTA from '../../assets/CTABackground.svg';

/* import HeroNavbar from './IdeaNetworkHero/HeroNavbar'; */

function IdeaNetworkHero() {
    return (
        <div className="mb-5 p-5 hero">
          {/* <div className="mb-5 text-center">
              <HeroNavbar/>
              </div> */}

          <img id="CTA" src={CTA} alt="CTA Background" className=""/>
          <div className="text-center CTA-center">
            <Button size="sm" className="">Get Started</Button>
            <p className="h6">
              Get in touch with us to begin a project
            </p>
          </div>
        </div>
    );
}

export default IdeaNetworkHero;

