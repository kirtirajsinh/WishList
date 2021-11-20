import React from 'react'
import GoogleMapReact from 'google-map-react';



const Map = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
    };

    
    return (
        <div className="h-1/2 w-1/2" >
            <GoogleMapReact
        bootstrapURLKeys={{ key:"AIzaSyDZEBQiysU7KhzaAAezVVlgyN1tnNC52fQ" }}
        defaultCenter={{lat:47.444,lng:-122.176}}
        // center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
      >  
      </GoogleMapReact>
        </div>
    )
}



export default Map
