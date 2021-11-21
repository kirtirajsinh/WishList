import React from 'react'
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import GoogleMapReact from 'google-map-react';

const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
)

const MapContainer = (props) => {
  console.log(props.wishlistItems);

  const mapStyles = {
    width: '50%',
    height: '50%',
  };
  const WishlistItem = (props) => {
    return (
      <div onClick={() => props.setSelectedWishlistItem(props.item)} className="markerContainer">
        <h1>{props.item.item}</h1>
      </div>
    )
  }
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDZEBQiysU7KhzaAAezVVlgyN1tnNC52fQ" }}
        defaultCenter={{ lat: props.business.lat, lng: props.business.lng }}
        defaultZoom={16}
      >
        {props.wishlistItems.map((item, index) => {
          return (
            <WishlistItem
              lat={item.lat}
              lng={item.lng}
              setSelectedWishlistItem={props.setSelectedWishlistItem}
              item={item}
            />
          )
        })}
        <div lat={props.business.lat} lng={props.business.lng} className="mainMarker">
          <h1>{props.business.businessName}</h1>
        </div>
      </GoogleMapReact>
    </div>


  )
}


export default MapContainer;
