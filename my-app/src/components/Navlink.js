import React, { Component } from 'react';
import {Header} from './Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export class Navlink extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12">
              
              <Header/>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              
              { this.props.children }            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default App;
