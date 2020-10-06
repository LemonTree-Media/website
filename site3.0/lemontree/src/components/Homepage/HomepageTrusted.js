import React from 'react';
import Icofont from 'react-icofont';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function HomepageTrusted() {
    return (
        <div className="text-center mb-large">
          <div className="mb-3">
            <Icofont className="green" size="2" icon="lock" /> &nbsp;
        <span className="h5 font-weight-bold green">Trusted</span>
          </div>
          <div className="mb-4">
            <p className="h2 font-weight-bold mb-5">
              Your search for the right video marketing partner ends here.
            </p>
          </div>
          <div>
            <Row className="justify-content-center">
              <Col className="col border-left text-left ml-3 mb-3" xl={4} xs={9} md={4}>
                <div className="h2 font-weight-bold green">3x</div>
                <p>
                  faster in finding the right video creatives. Industry average procurement processes take 3+ weeks. We take less than a week. &nbsp;
                  <small>
                    <a href="/">See how we did it.</a>
                  </small>
                </p>
              </Col>
             
              <Col className="col border-left text-left ml-3 mb-3" xl={4} xs={9} md={4}>
                <div className="h2 font-weight-bold green">2x</div>
                <p>
                  faster in video content production. Industry average production cycles are 1-3 months. We take 16-30 days. &nbsp;
                  <small>
                    <a href="/">See how we did it.</a>
                  </small>
                </p>
              </Col>
            </Row>
          </div>
        </div>
    );
}

export default HomepageTrusted;
