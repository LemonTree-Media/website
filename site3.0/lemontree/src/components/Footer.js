import React from 'react';

import Icofont from 'react-icofont';

import Logo from './Logo';

function Footer() {
    return (
        <footer className="mt-3 p-5">
          <div className="row">
            <div className="col">
              <Logo height={25} /> <br /><br />
              <b>LemonTree Media</b> is the world's leading community and video network for marketers and creatives.<br /><br />
              <Icofont size="2" icon="linkedin" />
              <Icofont size="2" icon="facebook" />
              <Icofont size="2" icon="instagram" />
            </div>
            <div className="col">
              <strong>Our Solution</strong> <br /><br />
              Overview <br /><br />
              Why LemonTree Media? <br /><br />
              Our Process <br /><br />
              FAQ
            </div>
            <div className="col">
              <strong>Work</strong><br /><br />
              Idea Network<br /><br />
              Case Studies<br /><br />
            </div>
            <div className="col">
              <strong>About</strong><br /><br />
              Our Mission<br /><br />
              Blog <br /><br />
              Terms of Service<br /><br />
              Privacy Policy <br /><br />
            </div>
            <div className="col">
              <strong>Contact</strong> <br /><br />
              <em>Prospective Clients:</em><br/>
              michael@lemontreemedia.io<br/><br/>
              <em>Careers:</em><br/>
              careers@lemontreemedia.io<br /><br />
              <em>Press & Media Relations:</em><br />
              info@lemontreemedia.io
            </div>
          </div>

          <hr />

          <div>
        &copy; 2020 LemonTree Media. All Rights Reserved.
                                   <span className="float-right">
                                     Made with <span role="img" aria-label="love"> &#10084;&#65039; </span> in NYC.
                                   </span>
          </div>
        </footer>

    );
}

export default Footer;
