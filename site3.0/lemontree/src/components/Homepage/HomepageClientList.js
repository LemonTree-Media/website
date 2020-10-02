import React from 'react';

import HomepageClientLogo from './HomepageClientList/HomepageClientLogo';
import logo_cgc from '../../assets/logo_cgc.jpeg';
import logo_ggg from '../../assets/logo_ggg.jpeg';
import logo_olay from '../../assets/logo_olay.jpeg';
import logo_herotech from '../../assets/logo_herotech.jpeg';
import logo_cctv from '../../assets/logo_cctv.jpeg';
import logo_sina from '../../assets/logo_sina.jpeg';
import logo_aic from '../../assets/logo_aic.jpeg';

function HomepageClientList() {
    return (
        <div className="mb-5 text-center">
          <em className="h6"><b>Join</b> an amazing brand community who trust the LemonTree network, including:</em>
          <div className="d-flex justify-content-between mx-5">
            <HomepageClientLogo
                clientName="Columbia Global Centers"
                src={logo_cgc} />
            <HomepageClientLogo
                clientName="GGG"
                src={logo_ggg} />
            <HomepageClientLogo
                clientName="Olay"
                src={logo_olay} />
            <HomepageClientLogo
                clientName="HeroTech"
                src={logo_herotech} />
            <HomepageClientLogo
                clientName="CCTV"
                src={logo_cctv} />
            <HomepageClientLogo
                clientName="Sina"
                src={logo_sina} />
            <HomepageClientLogo
                clientName="AIC"
                src={logo_aic} />
          </div>
        </div>
    );
}

export default HomepageClientList;
