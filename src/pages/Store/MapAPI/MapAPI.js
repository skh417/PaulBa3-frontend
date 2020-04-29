import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./MapAPI.scss";

class MapAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      currentLat: 0,
      currentLng: 0,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((curent) => {
      this.setState({
        currentLat: curent.coords.latitude,
        currentLng: curent.coords.longitude,
      });
    });
  }

  render() {
    const { branches } = this.props.mapData;
    const { currentLat, currentLng } = this.state;
    console.log(currentLat, currentLng);
    return (
      <div className='MapAPI'>
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{ lat: 37.38536, lng: 127.1247 }}
        >
          {branches
            ? branches.map((branch, index) => {
                return (
                  <Marker
                    key={index}
                    position={{ lat: branch.latitude, lng: branch.longitude }}
                  ></Marker>
                );
              })
            : console.log("no branches data now")}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBeN1pkEeveO6oiQRDDomfmbmFLQeulw4c",
})(MapAPI);
