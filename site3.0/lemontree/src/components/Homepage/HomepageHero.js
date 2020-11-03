import React from 'react';
import Button from 'react-bootstrap/Button';

import hero from '../../assets/hero-img.svg';

function HomepageHero() {
    return (
        <div className="bg">
        	<img src={hero} alt="LemonTree Media Hero" className="translate-up" />
          <div id="hero-text" className="h1 font-weight-bold mb-5 top-left">The future of media <br /> communication is here. </div>
          <div id="hero-text" className="h5 heroExplain">Blockchain-based creation & idea sharing platform for brands and interactive content creators </div>
          <Button size="sm top-right">Post a Brand Challenge</Button>
        </div>
    );
}

export default HomepageHero;
