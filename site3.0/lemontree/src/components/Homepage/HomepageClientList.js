import React from 'react';

import HomepageClientLogo from './HomepageClientList/HomepageClientLogo';

function HomepageClientList() {
    return (
        <div>
          HomepageClientList
          <HomepageClientLogo clientName="Olay" />
          <HomepageClientLogo clientName="CCTV" />
          <HomepageClientLogo clientName="Sina" />
        </div>
    );
}

export default HomepageClientList;
