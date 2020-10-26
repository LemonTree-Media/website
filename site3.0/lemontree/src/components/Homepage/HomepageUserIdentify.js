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
                Access a global network of media content and ideas. Partner with our network of creators to build your creative film and video content.
              </p>
            </Col>
            <Col className="col text-center" xl={6} xs={12} md={6}>
              <p className="h3 font-weight-bold mb-5 mt-5">
                I am a creative
              </p>
              <p>
                Make Idea Network your inspiration. As a “solver” on our Idea Network, you focus on bringing your ideas into reality while we help you book jobs faster.
              </p>
            </Col>
          </Row>
          <div className="row text-center">
            <div className="col mt-5 d-none d-sm-block">
              <Button size="sm"> Explore Idea Network </Button>
            </div>
            <div className="col mt-5 d-none d-sm-block">
              <Button size="sm"> Learn More </Button>
            </div>
          </div>

        </div>
    );
}

export default HomepageUserIdentify;
