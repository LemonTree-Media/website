import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function HomepageWhatWeDo() {
    return (
    	<Container fluid>
        <div className="homepage-whatwedo">
          <h1>What We Do</h1>
          <p>Cost-effective, one-stop interactive video marketing solutions
           leveraging a network of top creatives.</p>

          <Button variant="outline-dark">What is Interactive Video?</Button>
        </div>
        </Container>
    );
}

export default HomepageWhatWeDo;
