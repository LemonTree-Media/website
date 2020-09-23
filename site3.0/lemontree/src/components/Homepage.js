import React from 'react';

import HomepageHero from './Homepage/HomepageHero';
import HomepageClientList from './Homepage/HomepageClientList';
import HomepageWhatWeDo from './Homepage/HomepageWhatWeDo';
import HomepageSteps from './Homepage/HomepageSteps';
import HomepageWhyTakeAction from './Homepage/HomepageWhyTakeAction';
import HomepageInteractiveVideo from './Homepage/HomepageInteractiveVideo';
import HomepageUserIdentify from './Homepage/HomepageUserIdentify';
import HomepageTestimonialList from './Homepage/HomepageTestimonialList';
import HomepageWhoWeAre from './Homepage/HomepageWhoWeAre';

function Homepage() {
    return (
        <div>
          <HomepageHero />
          <HomepageClientList />
          <HomepageWhatWeDo />
          <HomepageSteps />
          <HomepageWhyTakeAction />
          <HomepageInteractiveVideo />
          <HomepageUserIdentify />
          <HomepageTestimonialList />
          <HomepageWhoWeAre />
        </div>
    );
}

export default Homepage;
