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
                <span> Personalized, data-driven videos </span>
              </div>
              <div className="mb-2">
                <Icofont size="3" icon="link" /> &nbsp;
                <span> Video with clear call-to-actions </span>
              </div>
              <div className="mb-2">
                <Icofont size="3" icon="fire-burn" /> &nbsp;
                <span> Video with interactive buttons embedded </span>
              </div>
              <div className="mb-4">
                <Icofont size="3" icon="chart-flow" /> &nbsp;
                <span> Video with multiple storylines </span>
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
