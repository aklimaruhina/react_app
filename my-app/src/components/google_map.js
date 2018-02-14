/*global google*/
import React, { Component } from 'react';

export default class extends Component {

  shouldComponentUpdate(){
    return false;
  }
  componentDidMount(){
   
  this.map =  new google.maps.Map(this.refs.map, {
          center: {lat: '-25.363', lng: '131.044'},
          zoom: 8,
          panControl: true,
          zoomControl: true,
          mapTypeControl: true,
          scaleControl: true,
          streetViewControl: true,
          overviewMapControl: true,
          rotateControl: true   
        });

  } 
  render() {
    return (
      <div>
        <div style={{'height': '100%'}}>
          <div id="map" ref="map" ></div>
        </div>
      </div>

    );
  }
}