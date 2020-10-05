import React from 'react';
import Icofont from 'react-icofont';
import Button from 'react-bootstrap/Button';

import interactiveVideo from '../../assets/interactive-video.jpg';

function HomepageInteractiveVideo() {
    return (
        <div className="mb-large mx-medium">
          <p className="h1 font-weight-bold mb-4 text-center">
            What is Interactive Video?
          </p>
          <div className="row">
            <div className="col">
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
              <div className="text-center">
                <Button size="sm" variant="outline-secondary">
                  See Industry Examples
                </Button>
              </div>
            </div>
            <div className="col">
              <img src={interactiveVideo} alt="Interactive video example" />
            </div>
          </div>
        </div>
    );
}

export default HomepageInteractiveVideo;
