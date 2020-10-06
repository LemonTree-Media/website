import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function HomepageUserIdentify() {
    return (
        <div className="mb-large mx-medium">
          <Row>
            <Col className="col text-center" xl={6} xs={12} md={6}>
              <p className="h3 font-weight-bold mb-5 mt-5">
                I am a marketer
              </p>
              <p>
                As a marketer, you partner deeply with our creatives using LemonTree's market intelligence solutions to skyrocket growth.
              </p>
            </Col>
            <Col className="col text-center" xl={6} xs={12} md={6}>
              <p className="h3 font-weight-bold mb-5 mt-5">
                I am a creative
              </p>
              <p>
                You focus on solving brand challenges and we help you book jobs faster. Each video on LemonTree is logged as "ideas," which you can use as support when you propose solutions to brands.
              </p>
            </Col>
          </Row>
          <div className="row text-center">
            <div className="col mt-5 d-none d-sm-block">
              <Button size="sm"> View Solutions </Button>
            </div>
            <div className="col mt-5 d-none d-sm-block">
              <Button size="sm"> Learn More </Button>
            </div>
          </div>
        </div>
    );
}

export default HomepageUserIdentify;
