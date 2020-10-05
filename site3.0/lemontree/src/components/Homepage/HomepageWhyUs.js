import React from 'react';
import Icofont from 'react-icofont';
import Button from 'react-bootstrap/Button';

function HomepageWhyUs() {
    return (
        <div className="mb-large mx-medium text-center">
          <p className="h1 font-weight-bold mb-4"> Why LemonTree Media </p>
          <div className="d-flex justify-content-between mb-4">
            <div className="col">
              <div className="h2 font-weight-bold">9x</div>
              <p className="text-left">
                Ability to add interactivity to boost video engagement by 9x. Collect video performance metrics and conduct A/B tests.
              </p>
            </div>
            <div className="col">
              <Icofont size="3" icon="dollar" />
              <p className="text-left mt-2">
                Have top-vetted creators bid to ensure best price in the market. Filter creatives based on price & industry.
              </p>
            </div>
            <div className="col">
              <Icofont size="3" icon="heart" />
              <div className="text-left mt-2">
                <p>
                  Deep partnership to understand your brand top-down and bottom up. &nbsp;
                  <small>
                    <a href="/">See how we did it.</a>
                  </small>
                </p>
              </div>
            </div>
            <div className="col">
              <Icofont size="3" icon="film" />
              <p className="text-left mt-2">
                Leverage data insights to inform creative decisions, producing best-in-class, viral, authentic storytelling content.
              </p>
            </div>
          </div>

          <Button size="sm">Explore our solution</Button> <br /><br />
          <Button size="sm">Download Product Brochure</Button> 
        </div>
    );
}

export default HomepageWhyUs;
