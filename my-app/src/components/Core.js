
import React, { Component } from 'react';
import {SectionsContainer, Section} from 'react-fullpage';
import '../vendor/css/custom.css';
import '../vendor/css/core.css';
import '../vendor/css/timeline.css';
import '../vendor/css/newld.css';
import { Scrollbars } from 'react-custom-scrollbars';

import { Container, Row, Col,  FormGroup, Input,InputGroup,InputGroupAddon } from 'reactstrap';
const divStyle = {
  height: '400px'
};
const aboutStyle = {
	height: '350px'
};
export class Core extends Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      
	    };
	  }

	  handleChange = (newDate) => {
	    console.log("newDate", newDate);
	    return this.setState({date: newDate});
	  }
  render() {
  	let options = {
      	sectionClassName:     'section',
		anchors: ['panel1', 'panel2', 'panel3', 'panel4', 'panel5', 'panel6'],
		menu: '#menu',
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
		normalScrollElements: '#scroll1, #scroll2, #scroll3, #scroll4, #scroll5, #scroll6,#basic',
		easing: 'easeInOutCubic',
        easingcss3: 'ease',
		//equivalent to jQuery `easeOutBack` extracted from http://matthewlein.com/ceaser/
		scrollingSpeed: 700,
		fixedElements: '#heads, .footer',
		scrollOverflow: true,
		navigation:   false
    };

    return (
    	<div>
    	<ul id="menu">
			<li data-menuanchor="panel2"><a href="#panel2"><span></span> Dance Classes</a></li>
			<li data-menuanchor="panel3"><a href="#panel3"><span></span> Schedule</a></li>
			<li data-menuanchor="panel4"><a href="#panel4"><span></span> Teachers</a></li>
			<li data-menuanchor="panel5"><a href="#panel5"><span></span> About Us </a></li>
		</ul>
		<div className = "core_fullpg">
        	<SectionsContainer {...options}>
	          <Section className="custom-section" id="section0" color="#69D2E7">
	          	<div className="container">
						<div className="vertical-content">
							<div className="col-md-10 col-sm-12 col-xs-12 pd-0" id="scroll1">

							</div>
						</div>
					</div>
					<div className="scroll-down-arrow">
						<a href="/" className="down-arrow" title="Scroll Down"></a>
					</div>
	          </Section>
	          <Section color="#0F1426" id="section1">
	          	<div className="container">
						<div className="vertical-content">
				          <Col md="10" xs="12" sm="12" className="pd-0" id="scroll2">
				          	<div className="dance-class mbl_version">
				          		<div style={divStyle} data-always-visible="1" data-rail-visible="1">
				          			<div className="overlay-section extra-section">
				          			<Row>
				          				<Col md="12" className="inner-title">
				          				<h3>Dance Classes</h3>
				          				</Col>
				          					
				          				<Col md="4" sm="6" xs="12">
					          				<div className="abs-container">
												<div className="abs-block">
													<h3>Hip Hop</h3>
													<a href="#basic" data-toggle="modal">View Details</a>
												</div>
												<img src={"/img/1.jpg"} alt={"user one"} />
											</div>
				          				</Col>
				          				<Col md="4" sm="6" xs="12">
				          					<div className="abs-container">
												<div className="abs-block">
													<h3>Hip Hop</h3>
													<a href="#basic" data-toggle="modal">View Details</a>
												</div>
												<img src={"/img/1.jpg"} alt={"user two"} />
											</div>
				          				</Col>
				          				<Col md="4" sm="6" xs="12">
				          					<div className="abs-container">
												<div className="abs-block">
													<h3>Hip Hop</h3>
													<a href="#basic" data-toggle="modal">View Details</a>
												</div>
												<img src={"/img/1.jpg"} alt={"user two"} />
											</div>
				          				</Col>
				          				</Row>
				          			</div>
				          		</div>
				          	</div>
				          </Col>
						</div>
					</div>
	          </Section>
	          <Section color="#E0E4CC" id="section1">
	          	<div className="container sm_mbl_screen">
					<div className="vertical-content">
						<Col md="10" sm="12" xs="12" className="pd-0" id="scroll3">
							<div className="dance-class hidden-xs">
								<Scrollbars style={divStyle}> 
									<Row className="overlay-section extra-section">	
										<Col md="12" className="inner-title">
											<h3>Dance Classes</h3>
										</Col>
										<Col md="12 float-right">
											<Col md="3" className="float-right">
												<FormGroup>
													<InputGroup>
												        
												        <Input placeholder="username" />
												        <InputGroupAddon addonType="prepend"><i className="fa fa-calendar"></i></InputGroupAddon>
												      </InputGroup>
												</FormGroup>
											</Col>
										</Col>
										<Col md="12" className="pd-0">
											<table className="table table-condensed no-border">
												<thead>
													<tr>
														<th width="25%">Wednesday, 12 July</th>
														<th width="25%" className="white">Class</th>
														<th width="25%">Instructor</th>
														<th width="25%">Service Category</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td width="25%">9.00 AM - 10.00 AM</td>
														<td className="white" width="25%">HIP/JAZ</td>
														<td width="25%">William Tent</td>
														<td width="25%">William Tent</td>
													</tr>
													<tr>
														<td>9.00 AM - 10.00 AM</td>
														<td className="white">HIP/JAZ</td>
														<td>William Tent</td>
														<td>William Tent</td>
													</tr>
													<tr>
														<td>9.00 AM - 10.00 AM</td>
														<td className="white">HIP/JAZ</td>
														<td>William Tent</td>
														<td>William Tent</td>
													</tr>
													<tr>
														<td>9.00 AM - 10.00 AM</td>
														<td className="white">HIP/JAZ</td>
														<td>William Tent</td>
														<td>William Tent</td>
													</tr>
													<tr>
														<td>9.00 AM - 10.00 AM</td>
														<td className="white">HIP/JAZ</td>
														<td>William Tent</td>
														<td>William Tent</td>
													</tr>
													<tr>
														<td>9.00 AM - 10.00 AM</td>
														<td className="white">HIP/JAZ</td>
														<td>William Tent</td>
														<td>William Tent</td>
													</tr>
													<tr>
														<td>9.00 AM - 10.00 AM</td>
														<td className="white">HIP/JAZ</td>
														<td>William Tent</td>
														<td>William Tent</td>
													</tr>
													<tr>
														<td>9.00 AM - 10.00 AM</td>
														<td className="white">HIP/JAZ</td>
														<td>William Tent</td>
														<td>William Tent</td>
													</tr>
													<tr>
														<td>9.00 AM - 10.00 AM</td>
														<td className="white">HIP/JAZ</td>
														<td>William Tent</td>
														<td>William Tent</td>
													</tr>
													<tr>
														<td>9.00 AM - 10.00 AM</td>
														<td className="white">HIP/JAZ</td>
														<td>William Tent</td>
														<td>William Tent</td>
													</tr>
													<tr>
														<td>9.00 AM - 10.00 AM</td>
														<td className="white">HIP/JAZ</td>
														<td>William Tent</td>
														<td>William Tent</td>
													</tr>
												</tbody>
											</table>
										</Col>
									</Row>
								
								</Scrollbars>
							</div>
						</Col>
					</div>
				</div>
	          </Section>
	          <Section color="#E0E4CC" id="section2">
	          	<div className="container">
	          		<div className="vertical-content">
	          			<Col md="10" sm="12" xs="12" className="pd-0" id="scroll4">
	          				<div className="overlay-section extra-section mb_30">
	          					<Row className="m-0">
									<Col md="12" className="inner-title">
										<h3>Teachers</h3>
									</Col>
									<Col md="4" sm="4" xs="12">
										<div className="teachers-abs-container abs-container">
											<div className="abs-block">
												<h3>William Tent</h3>
											</div>
											<img src={"/img/1.jpg"} alt={"Teacher"} />
										</div>
									</Col>
									<Col md="4" sm="4" xs="12">
										<div className="teachers-abs-container abs-container">
											<div className="abs-block">
												<h3>William Tent</h3>
											</div>
											<img src={"/img/1.jpg"} alt={"Teacher"} />
										</div>
									</Col>
									<Col md="4" sm="4" xs="12">
										<div className="teachers-abs-container abs-container">
											<div className="abs-block">
												<h3>William Tent</h3>
											</div>
											<img src={"/img/1.jpg"} alt={"Teacher"} />
										</div>
									</Col>
								</Row>
							</div> 
	          			</Col>
	          		</div>
	          	</div>
	          </Section>
	          <Section color="#E0E4CC" id="section3">
	          	<Container>
	          		<div className="vertical-content">
	          		<Row>
	          			<Col md="4" sm="6" xs="12" className="mbl_img_center">
							<img className="img-responsive" src={"/img/bio1.png"} alt={"Bio"} />
						</Col>
						<Col md="6" sm="6" xs="12" className="pd-0" id="scroll5">
							<div className="member-desc">
								<div className="box-title text-left">
									<h3 style={{"text-align":"left"}}>About Us</h3>
								</div>
								<div className="hidden-xs">
									<Scrollbars style={aboutStyle}>
								    
										<ul className="list events">
											<li>
				                                <div className="date">
				                                    <p className="month">Agenda / abr</p>
				                                    <p className="day">02</p>
				                                </div>
				                                <div className="description">
				                                    <p className="title">Mallorca Sax Fest 2015.</p>
				                                    <p className="time">Clases y conciertos.Some Date events description of that person.</p>
				                                    <p className="time">www.facebook.com/</p>
				                                </div>
				                            </li>
				                            <li>
				                                <div className="date">
				                                    <p className="month">Agenda / abr</p>
				                                    <p className="day">02</p>
				                                </div>
				                                <div className="description">
				                                    <p className="title">Mallorca Sax Fest 2015.</p>
				                                    <p className="time">Clases y conciertos.Some Date events description of that person.</p>
				                                    <p className="time">www.facebook.com/</p>
				                                </div>
				                            </li>
				                            <li>
				                                <div className="date">
				                                    <p className="month">Agenda / abr</p>
				                                    <p className="day">02</p>
				                                </div>
				                                <div className="description">
				                                    <p className="title">Mallorca Sax Fest 2015.</p>
				                                    <p className="time">Clases y conciertos.Some Date events description of that person.</p>
				                                    <p className="time">www.facebook.com/</p>
				                                </div>
				                            </li>
				                            <li>
				                                <div className="date">
				                                    <p className="month">Agenda / abr</p>
				                                    <p className="day">02</p>
				                                </div>
				                                <div className="description">
				                                    <p className="title">Mallorca Sax Fest 2015.</p>
				                                    <p className="time">Clases y conciertos.Some Date events description of that person.</p>
				                                    <p className="time">www.facebook.com/</p>
				                                </div>
				                            </li>
				                            <li>
				                                <div className="date">
				                                    <p className="month">Agenda / abr</p>
				                                    <p className="day">02</p>
				                                </div>
				                                <div className="description">
				                                    <p className="title">Mallorca Sax Fest 2015.</p>
				                                    <p className="time">Clases y conciertos.Some Date events description of that person.</p>
				                                    <p className="time">www.facebook.com/</p>
				                                </div>
				                            </li>
			                            </ul>
	                                
	                                </Scrollbars>
								</div>
								    
                            </div>
						</Col>
					</Row>
	          		</div>
	          	</Container>
	          </Section>

	        </SectionsContainer>
	    </div>
      </div>

    );
  }
}

// export default Header;
