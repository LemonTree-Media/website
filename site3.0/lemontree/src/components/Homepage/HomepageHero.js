import React from 'react';
import Button from 'react-bootstrap/Button';

import hero from '../../assets/hero-img.svg';

function HomepageHero() {
    return (
        <div className="bg">
        	<img src={hero} alt="LemonTree Media Hero" className="translate-up" />
          <div id="hero-text" className="h1 font-weight-bold mb-5 top-left">Create interactive <br />media content with <br />a network of top creatives</div>
          <Button size="sm top-right">See our work</Button>
        </div>
    );
}

export default HomepageHero;
