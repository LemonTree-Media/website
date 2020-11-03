import React from 'react';
import Button from 'react-bootstrap/Button';

import Funnel from '../../assets/funnel.svg';


function HomepageWhatWeDo() {
    return (
    	<div className="ml-5">
    		<div className="transform">
    		<p className="h2 font-weight-bold mb-5 ml-5 text-left transform" style={{backgroundColor: "#FFF9AE", width:"75%", borderRadius:"5px", padding:"5px"}}>Transformation at speed</p>
    			<div className="d-flex flex-row">
    				<p className="h1 font-weight-bold mb-5 ml-5 text-left transform">3x</p><p className="mt-4 ml-3">more engagement than traditional videos</p>
    			</div>
    			<div className="d-flex flex-row">
    				<p className="h1 font-weight-bold mb-5 ml-5 text-left transform">50%</p><p className="mt-4 ml-3">increase in average time spent</p>
    			</div>
    			<div className="d-flex flex-row">
    				<p className="h1 font-weight-bold mb-5 ml-5 text-left transform">30%</p><p className="mt-4 ml-3">cost reduction by strategically repurposing content</p>
    			</div>
    		</div>
    		<img src={Funnel} className="img"/>

	    	  <div className="mb-0 mx-medium text-center">
	          <p className="h1 font-weight-bold mb-5 mr-5">What we do</p>
	          <p className="mb-5 mt-5">With a global network of creative problem solvers, 
	          LemonTree Media creates and launches cost-effective interactive media content, combining in-depth brand 
	          understanding and market intelligence.</p>
	         
	        </div>
        </div>
    );
}

export default HomepageWhatWeDo;
