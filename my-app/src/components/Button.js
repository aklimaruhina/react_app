
import React, { Component } from 'react';
import '../vendor/css/timeline.css';
import '../vendor/css/eventstyle.css';
import $ from 'jquery';
export class Events extends Component {
  constructor(props) {
    super(props);
    // this.state = {store : ''}
  }
  shouldComponentUpdate(){
    return false;
  }
  componentDidMount = () => {
    // let _this = this;
   $('button').on('click', function(){
      // alert("You clied button");
      // _this.setState({ store : Math.random() });

   });
   this.map = new google.maps.Marker({this.refs.map
          center: {lat: this.props.lat, lng: this.props.lng}
          zoom: 8
        });

  } 
  render() {
    return (
      <div>
        <h1>Events </h1>
        <h2>{this.state.store} </h2>
        <p><button>Test button</button> </p>
        <div style={{'height': '100%'}}>
          <div id="map" ref="map" lat={-25.363} lan={131.044}></div>
        </div>
      </div>

    );
  }
}