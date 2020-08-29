import React from 'react'
import GoogleMapReact from 'google-map-react'

import GeoPoint from './geo-point'
import datas from '../data.json'

function Map(props) {
  return (
    <div className="geomap">
      <div style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_API_KEY }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          {datas.map((data, index) => {
            return (
              <GeoPoint
                key={index}
                data={data}
                lat={data.latitude}
                lng={data.longitude}
                zoom={props.zoom}
              />
            )
          })}
        </GoogleMapReact>
      </div>
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 38.638663,
    lng: 34.2576045
  },
  zoom: 5.7
}
export default Map
