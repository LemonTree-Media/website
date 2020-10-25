import React from 'react';
import Icofont from 'react-icofont';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function HomepageWhyUs() {
    return (
        <div className="mb-large mx-medium text-center">
          <Row className="d-flex justify-content-between mb-8">
            
             <Col xl={3} xs={12} md={9}>
             <Icofont size="2" icon="icofont-video-cam" />
              <div className="h4 font-weight-bold mb-4 mt-3">Media Creation</div>
              <div className="text-left mt-3">
                <p>
                  Shortlist creatives and produce great content for your brand. &nbsp;
                </p>
              </div>
            </Col>

          <Col xl={3} xs={12} md={9}>
             <Icofont size="2" icon="icofont-youtube-play" />
              <div className="h4 font-weight-bold mb-4 mt-3">Distribution</div>
              <div className="text-left mt-3">
                <p>
                  Distribute content on popular channels via ads & influencers. &nbsp;
                </p>
              </div>
            </Col>

            <Col xl={3} xs={12} md={9}>
            <Icofont size="2" icon="icofont-tick-mark" />
              <div className="h4 font-weight-bold mb-4 mt-3">Services</div>
              <div className="text-left mt-3">
                <p>
                  Accelerate digital growths with our premium services. &nbsp;
                 
                </p>
              </div>
            </Col>
            <Col xl={3} xs={12} md={9}>
            <Icofont size="2" icon="icofont-diamond" />
              <div className="h4 font-weight-bold mb-4 mt-3">All-in-one</div>
              <p className="text-left mt-3">
                 Contact us directly for an end-to-end package from concept to launch.
              </p>
            </Col>
          </Row>

          <Button size="sm" className="mt-5">What is Interactive Media?</Button> <br /><br />
         
        </div>
    );
}

export default HomepageWhyUs;
