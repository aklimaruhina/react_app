
import React, { Component } from 'react';
import SimpleLineIcon from 'react-simple-line-icons';
import {SectionsContainer, Section} from 'react-fullpage';
import '../vendor/css/timeline.css';
import '../vendor/css/eventstyle.css';

export class Events extends Component {
	constructor() {
		super();
	}

		componentDidMount() {
			$('#fullpage').fullpage({
	            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
	            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
	            menu: '#menu',
	            css3: true,
	            scrollingSpeed: 1000
	        });
	}
  render() {
    return (
    	<div>
        <ul id="menu">
			<li data-menuanchor="sectionOne"><a href="#sectionOne"><span></span> Featured Shows</a></li>
			<li data-menuanchor="sectionTwo"><a href="#sectionTwo"><span></span> Our Clients</a></li>
			<li data-menuanchor="sectionThree"><a href="#sectionThree"><span></span> International Events</a></li>
			<li data-menuanchor="sectionFour"><a href="#sectionFour"><span></span> Featured Films</a></li>
			<li data-menuanchor="sectionFive"><a href="#sectionFive"><span></span> TV Commercial</a></li>
			<li data-menuanchor="sectionSix"><a href="#sectionSix"><span></span> Contact Person</a></li>
		</ul>
		<div className = "core_fullpg">
			<SectionsContainer className="pd-0" {...options}>
	          <Section className="custom-section" color="#0F1426">
	          	<div className="content-section slide" id="slide1">
	          	</div>
	          	<div className="slide" id="slide2">
				</div>
			    <div className="slide" id="slide3"></div>
				<div className="scroll-down-arrow">
					<a href="javascript:;" className="down-arrow" title="Scroll Down"></a>
				</div>
	          </Section>
	          <Section color="#0F1426">Page 2</Section>
	          <Section color="#0F1426">Page 3</Section>
	        </SectionsContainer>
        </div>
      </div>

    );
  }
}

// export default Header;
