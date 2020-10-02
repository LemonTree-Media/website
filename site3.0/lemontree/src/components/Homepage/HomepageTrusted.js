import React from 'react';
import Icofont from 'react-icofont';

function HomepageTrusted() {
    return (
        <div className="text-center mb-large">
          <div className="mb-3">
            <Icofont className="green" size="2" icon="lock" /> &nbsp;
            <span className="h5 font-weight-bold green">Trusted</span>
          </div>
          <div className="mb-4">
            <p className="h2 font-weight-bold">
              Your search for the right video marketing partner ends here.
            </p>
          </div>
          <div>
            <div className="d-flex justify-content-around mx-large">
              <div className="col border-left text-left">
                <div className="h3 font-weight-bold green">3x</div>
                faster in finding the right video creatives. Industry average procurement processes take 3+ weeks. We take less than a week. &nbsp;
                <small>
                  <a href="/">See how we did it.</a>
                </small>
              </div>
              <div className="col border-left text-left">
                <div className="h3 font-weight-bold green">2x</div>
                faster in video content production. Industry average production cycles are 1-3 months. We take 16-30 days. &nbsp;
                <small>
                  <a href="/">See how we did it.</a>
                </small>
              </div>
            </div>
          </div>
        </div>
    );
}

export default HomepageTrusted;
