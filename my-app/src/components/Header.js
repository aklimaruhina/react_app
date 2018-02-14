
import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {Home} from './Home';
import {Bio} from './Bio';
import {Core} from './Core';
import {Events} from './Events';

import {Media} from './Media';
export class Header extends Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Router>
    	<div>
        <Navbar className="navbar navbar-default transparent-menu navbar-fixed-top" expand="md" style={{"zIndex": '11'}}>
        <div className = "container">
        <div className ="navbar-header">
          <NavbarBrand href="/"><img src={"/img/logo.png"} alt={"brand"}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        </div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="nav" id="side_navigation" navbar style={{"marginLeft":'30px'}}>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/bio">Bio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/core">The Core Academy</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/events">Shows & Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/media">Media</NavLink>
              </NavItem>
            </Nav>
            <Nav className="nav ml-auto navbar-right hidden-xs" navbar>
            	<NavItem>
            		<span className="phone">Contact Us-  <span className="text-bold">012254574874</span></span>
            	</NavItem>
            </Nav>
          </Collapse>

          </div>
        </Navbar>
        <Route exact path='/' component={Home} />
        <Route path='/bio' component={Bio} />
        <Route path='/core' component={Core} />
        <Route path='/events' component={Events} />
        <Route path='/media' component={Media} />
      </div>

      </Router>

    );
  }
}

// export default Header;
