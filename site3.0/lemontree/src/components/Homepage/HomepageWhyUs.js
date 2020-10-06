import React from 'react';
import Icofont from 'react-icofont';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function HomepageWhyUs() {
    return (
        <div className="mb-large mx-medium text-center">
          <p className="h1 font-weight-bold mb-5"> Why LemonTree Media </p>
          <Row className="d-flex justify-content-between mb-8">
            <Col className="d-xs-block" xl={3} xs={12} md={6}>
              <div className="h2 font-weight-bold">9x</div>
              <p className="text-left mt-2">
                Ability to add interactivity to boost video engagement by 9x. Collect video performance metrics and conduct A/B tests.
              </p>
            </Col>
            <Col xl={3} xs={12} md={6}>
              <Icofont size="3" icon="dollar" />
              <p className="text-left mt-3">
                Have top-vetted creators bid to ensure best price in the market. Filter creatives based on price & industry.
              </p>
            </Col>
            <Col xl={3} xs={12} md={6}>
              <Icofont size="3" icon="heart" />
              <div className="text-left mt-3">
                <p>
                  Deep partnership to understand your brand top-down and bottom up. &nbsp;
                  <small>
                    <a href="/">See how we did it.</a>
                  </small>
                </p>
              </div>
            </Col>
            <Col xl={3} xs={12} md={6}>
              <Icofont size="3" icon="film" />
              <p className="text-left mt-3">
                Leverage data insights to inform creative decisions, producing best-in-class, viral, authentic storytelling content.
              </p>
            </Col>
          </Row>

          <Button size="sm" className="mt-5">Explore our solution</Button> <br /><br />
          <Button size="sm">Download Product Brochure</Button> 
        </div>
    );
}

export default HomepageWhyUs;
