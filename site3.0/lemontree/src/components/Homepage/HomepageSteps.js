import React from 'react';
import Button from 'react-bootstrap/Button';

import steps from '../../assets/steps.svg';

function HomepageSteps() {
    return (
        <div className="mb-large d-none d-lg-block">
          <div className="mb-3">
            <div className="ml-5 text-left h2 font-weight-bold">
              Connect with the most <br /> suitable <a>pre-vetted creatives</a> <br />in under 24 hours
            </div>
            <img src={steps} alt="LemonTree Media Process" className="translate-up" />
          </div>
          <div className="mr-3 text-center">
            <Button variant="success">Start Now</Button> <br/>
            No sign-up required.
          </div>
        </div>
    );
}

export default HomepageSteps;
