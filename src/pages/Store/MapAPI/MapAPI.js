import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./MapAPI.scss";

class MapAPI extends Component {
  render() {
    return (
      <div className='MapAPI'>
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{ lat: 37.5, lng: 127 }}
        ></Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBeN1pkEeveO6oiQRDDomfmbmFLQeulw4c",
})(MapAPI);
