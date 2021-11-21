import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
)

const MapContainer = (props) => {
  

  const mapStyles = {
    width: '50%',
    height: '50%',
  };

  const WishlistItem = (props) => {
    return (
      <Marker
        // title={props.item.item}
        position={{ lat: 29, lng: -81 }}
      />
    )
  }
    // string to int
  console.log(props.wishlistItems[0]);
  return (
    <Map
      google={props.google}
      zoom={3}
      style={mapStyles}
      initialCenter={{
        // lat: parseInt(props.business.lat),
        // lng: parseInt(props.business.lng)
        lat: 29.646055,
        lng: -82.337385
      }}
    >
      <Marker
        // title={props.item.item}
        position={{ lat: 29, lng: -81 }}
      />
      <WishlistItem item={props.wishlistItems[0]} />
      {/* {props.wishlistItems.map((item, index) => {
        return (
          <WishlistItem item={item} key={index} />
        )
      })} */}
    </Map>

  )
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDZEBQiysU7KhzaAAezVVlgyN1tnNC52fQ"),
  LoadingContainer: LoadingContainer
})(MapContainer);
