import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Steps from './steps.svg'


function HomepageSteps() {
	
    return (
    	<Container fluid>
        <div className="homepage-steps">
      		 <h2>Connect with the most suitable <a id="uline">pre-vetted creatives</a> in under 24 hours</h2>
          	<img src={Steps} alt="LemonTree Media Process" />
          	<Button variant="success">Start Now</Button>{' '}
        </div>
        </Container>
    );
}

export default HomepageSteps;
