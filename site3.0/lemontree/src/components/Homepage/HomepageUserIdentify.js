import React from 'react';
import Button from 'react-bootstrap/Button';

function HomepageUserIdentify() {
    return (
        <div className="mb-large mx-medium">
          <div className="row">
            <div className="col text-center">
              <p className="h3 font-weight-bold mb-4">
                I am a marketer
              </p>
              <p>
                As a marketer, you partner deeply with our creatives using LemonTree's market intelligence solutions to skyrocket growth.
              </p>
            </div>
            <div className="col text-center">
              <p className="h3 font-weight-bold mb-4">
                I am a creative
              </p>
              <p>
                You focus on solving brand challenges and we help you book jobs faster. Each video on LemonTree is logged as "ideas," which you can use as support when you propose solutions to brands.
              </p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col">
              <Button size="sm"> View Solutions </Button>
            </div>
            <div className="col">
              <Button size="sm"> Learn More </Button>
            </div>
          </div>
        </div>
    );
}

export default HomepageUserIdentify;
