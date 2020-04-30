import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import "./MapAPI.scss";

class MapAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      currentLat: 0,
      currentLng: 0,
      isOpen: false,
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

  showInfo = (e, map) => {
    this.setState({ isOpen: true });
    const infoWindow = new window.google.maps.InfoWindow({
      content: '<div id="infoWindow">컨텐트</div>',
      position: { lat: e.latitude, lng: e.longitude },
    });
    console.log(infoWindow);
  };

  closeInfo = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { branches } = this.props.mapData;
    const { currentLat, currentLng, isOpen } = this.state;
    return (
      <div className='MapAPI'>
        {currentLat ? (
          <Map
            google={this.props.google}
            zoom={15}
            mapTypeControl={false}
            zoomControl={false}
            initialCenter={{ lat: currentLat, lng: currentLng }}
          >
            {branches ? (
              branches.map((branch, index) => {
                return (
                  <Marker
                    key={index}
                    position={{ lat: branch.latitude, lng: branch.longitude }}
                    icon={{
                      url:
                        "https://www.baristapaulbassett.co.kr/images/store/mapIcon01.png",
                    }}
                    onClick={() => this.showInfo}
                  >
                    {this.state.isOpen && (
                      <InfoWindow onCloseClick={this.closeInfo}>
                        <div>yes</div>
                      </InfoWindow>
                    )}
                  </Marker>
                );
              })
            ) : (
              <></>
            )}
          </Map>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBeN1pkEeveO6oiQRDDomfmbmFLQeulw4c",
})(MapAPI);
