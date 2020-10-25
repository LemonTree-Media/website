import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import CreativeProfileVideo from './CreativeProfile/CreativeProfileVideo';
import CreativeProfileText from './CreativeProfile/CreativeProfileText';

import jacob from '../assets/jacob.jpeg';

function CreativeProfile() {
    
    return (
        <div className="mx-medium mb-5 mt-5 justify-content-center">
          <Row className="row">
            <Col className="col" xl={4} xs={12} md={12}>
              <CreativeProfileText 
              	name = "Janek Po"
              	img = {jacob}
              	bio = "My name is mike and I am a 34-year-old filmmaker from New Zealand with 10 years of experience in commercial filmmaking. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetu metus vel ante euismod consectetur. Maecenas tristique cursus vulputate. Donec facilisis ullamcorper tellus at rhoncus. Duis vitae libero tortor."
              	rating = "5.0"
              	jobs = "18"
              	industry = "E-commerce"
                expertise = {['animation','event video']}
                language = "French"
                location = "United States"
                client = "Nike"
              	/>
            </Col>


           
          
                <Col className="col" xl={8} xs={12} md={12}>
                  	<CreativeProfileVideo 
                  		
                  	/>
                </Col>
            
           
          </Row>

        </div>
    );
}

export default CreativeProfile;
