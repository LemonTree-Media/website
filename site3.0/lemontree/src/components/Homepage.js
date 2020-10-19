import React from 'react';

import HomepageHero from './Homepage/HomepageHero';
import HomepageClientList from './Homepage/HomepageClientList';
import HomepageWhatWeDo from './Homepage/HomepageWhatWeDo';
import HomepageSteps from './Homepage/HomepageSteps';
import HomepageTrusted from './Homepage/HomepageTrusted';
import HomepageWhyUs from './Homepage/HomepageWhyUs';
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

          <HomepageTrusted/>
          <HomepageWhyUs/>

          <HomepageInteractiveVideo />
          <HomepageUserIdentify />
          <HomepageTestimonialList />
          <HomepageWhoWeAre />
        </div>
    );
}

export default Homepage;
