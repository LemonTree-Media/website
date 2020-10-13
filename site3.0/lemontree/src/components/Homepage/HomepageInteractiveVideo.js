import React from 'react';

import Icofont from 'react-icofont';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import interactiveVideo from '../../assets/interactive-video.jpg';

function HomepageInteractiveVideo() {
    return (
        <div className="mb-large mx-medium">
          <p className="h1 font-weight-bold mb-5 text-center">
            What is Interactive Video?
          </p>
          <Row className="row">
            <Col className="col" xl={6} xs={12} md={6}>
              <div className="mb-2">
                <Icofont size="3" icon="business-man-alt-3" /> &nbsp;
                <p className="d-inline"> Personalized, data-driven videos </p>
              </div>
              <div className="mb-2">
                <Icofont size="3" icon="link" /> &nbsp;
                <p className="d-inline"> Video with clear call-to-actions </p>
              </div>
              <div className="mb-2">
                <Icofont size="3" icon="fire-burn" /> &nbsp;
                <p className="d-inline"> Video with interactive buttons embedded </p>
              </div>
              <div className="mb-4">
                <Icofont size="3" icon="chart-flow" /> &nbsp;
                <p className="d-inline"> Video with multiple storylines </p>
              </div>
              <div className="text-center mt-5 mb-3">
                <Button size="sm" variant="outline-secondary">
                  See Industry Examples
                </Button>
              </div>
            </Col>
            <Col className="col" xl={6} xs={12} md={6}>
              <img id="interactive" src={interactiveVideo} alt="Interactive video example" />
            </Col>
          </Row>

        </div>
    );
}

export default HomepageInteractiveVideo;
