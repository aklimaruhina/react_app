
import React, { Component } from 'react';
import '../vendor/css/custom.css';

export class Footer extends Component {
  render() {
    return (
    	<div className="footer" style={{"zIndex": "1"}}>
        <div className="container">
          <p className="hidden-xs">&copy;2018 Eagles Dance Company- <a href="/contact">Contact</a></p>
          <p className="visible-xs cell_phone" >Call Us - 05456543434454</p>
        </div>
      </div>

    );
  }
}

// export default Header;
