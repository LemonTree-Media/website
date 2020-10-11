import React from 'react';

import Button from 'react-bootstrap/Button';

import HomepageTestimonial from './HomepageTestimonialList/HomepageTestimonial';
import VideoEmbed from '../VideoEmbed';
import jacob from '../../assets/jacob.jpeg';
import meryl from '../../assets/meryl.jpeg';

function HomepageTestimonialList() {
    return (
        <div className="mb-large text-center">
          <HomepageTestimonial
              name="Meryl T."
              company="Gramercy Gift Guide"
              title="Chief Marketing Officer"
              text="LemonTree became a true brand partner and delved into understanding my brand and target customers."
              image={meryl}
              videoPosition="right"
          >
            <VideoEmbed videoLink="https://embedder.wirewax.com/8176540/" />
          </HomepageTestimonial>
          <HomepageTestimonial
              name="Jacob U."
              company="HeroTech"
              title="Chief Experience Officer"
              text="LemonTree went above and beyond my expectation to deliver something meaningful. The story was empowering. Simply stunning."
              image={jacob}
              videoPosition="left"
          >
            <VideoEmbed videoLink="https://player.vimeo.com/video/396527090?color=e84c4d&title=0&byline=0&portrait=0" />
          </HomepageTestimonial>

          <Button size="sm" variant="outline-secondary">
            View More Case Studies
          </Button>

        </div>
    );
}

export default HomepageTestimonialList;
