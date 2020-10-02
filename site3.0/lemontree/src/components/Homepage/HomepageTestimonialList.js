import React from 'react';
import Button from 'react-bootstrap/Button';

import HomepageTestimonial from './HomepageTestimonialList/HomepageTestimonial';
import VideoEmbed from '../VideoEmbed';

function HomepageTestimonialList() {
    return (
        <div className="mb-large text-center">
          <HomepageTestimonial
              name="Leslie F."
              company="Pypestream"
              title="Chief Experience Officer"
              text="Lorem upsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur metus vel ante euismod consecetur."
              image={null}
              videoPosition="right"
          >
            <VideoEmbed />
          </HomepageTestimonial>
          <HomepageTestimonial
              name="Jacob U."
              company="HeroTech"
              title="Chief Experience Officer"
              text="Lorem upsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur metus vel ante euismod consecetur."
              image={null}
              videoPosition="left"
          >
            <VideoEmbed />
          </HomepageTestimonial>

          <Button size="sm" variant="outline-secondary">
            View More Case Studies
          </Button>
        </div>
    );
}

export default HomepageTestimonialList;
