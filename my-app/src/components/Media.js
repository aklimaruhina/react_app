
import React, { Component } from 'react';
import { Container, Row, Col,Card,CardText, CardBody, CardLink } from 'reactstrap';
import '../vendor/css/custom.css';
import '../vendor/css/animate.css';
import ColoredScrollbars from './ColoredScrollbars';
const myStyle = {
    height: '95vh'
};

export class Media extends Component {
  render() {
    return (
    	<div>
    <ColoredScrollbars id="media_content" style={myStyle}>
        <div className="blog-container" >
    		<Container>
    			<Row>
    				<Col md="9">

    					<Card>
    						<CardBody className="blog-section" style={{"padding":"40px"}}>
    							<small>November 4, 2015</small>
    							<h3>Facebook Reports Third Quarter 2015 Results</h3>
    							<div className="blog-media">
    								<img className="img-responsive" src={"/img/iit_newsroom_03.jpeg"} alt={"..."} />
    							</div>
    							<CardText>We’re announcing new milestones achieved in Facebook’s long-term artificial intelligence research.</CardText>
    							<CardLink href="/">Read More..</CardLink>
    							<div className="blog-footer">
    								<span>Category: <CardLink href="/">Company News</CardLink></span>
    							</div>
    						</CardBody>
    					</Card>
    
    					<Card>
    						<CardBody className="blog-section" style={{"padding":"40px"}}>
    							<small>November 4, 2015</small>
    							<h3>Facebook Reports Third Quarter 2015 Results</h3>
    							<div className="blog-media">
    								<img className="img-responsive" src={"/img/jazz.jpeg"} alt ={"..... "} />
    							</div>
    							<CardText>We’re announcing new milestones achieved in Facebook’s long-term artificial intelligence research.</CardText>
    							<CardLink href="/">Read More..</CardLink >
    							<div className="blog-footer">
    								<span>Category: <CardLink href="/">Company News</CardLink></span>
    							</div>
    						</CardBody>
    					</Card>

    				</Col>
    				<Col md="3">
    					<div className="category">
    						<h3>Category</h3>
    						<ul className="list-unstyled">
    							<li><a href="/">Events (20)</a></li>
    							<li><a href="/">Interviews (20)</a></li>
    							<li><a href="/">Media (20)</a></li>
    							<li><a href="/">News (20)</a></li>
    							<li><a href="/">Interviews (20)</a></li>
    						</ul>
    
    						
    						<h3>Archive</h3>
    						<ul className="list-unstyled">
    							<li><a href="/">2015</a></li>
    							<li><a href="/">2014</a></li>
    							<li><a href="/">2013</a></li>
    							<li><a href="/">2012</a></li>
    							<li><a href="/">2011</a></li>
    						</ul>						
    					</div>
    				</Col>
    			</Row>
    		</Container>

		</div>
    </ColoredScrollbars>
</div>
    );
  }
}

// export default Header;
