import React from 'react'
import Popup from 'reactjs-popup'

const GeoPoint = ({ data }) => (
  <Popup
    trigger={
      <div
        className="geopoint"
        style={{
          width: `${1.75 ** Number(data.ml)}px`,
          height: `${1.75 ** Number(data.ml)}px`
        }}
      >
        <span className="geotext"></span>
      </div>
    }
    on="hover"
  >
    <span>
      <ul>
        {Object.keys(data).map((key) => {
          return (
            <li>
              {key}: {data[key]}
            </li>
          )
        })}
      </ul>
    </span>
  </Popup>
)
export default GeoPoint
