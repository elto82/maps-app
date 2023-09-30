import React from 'react'
import ReactDOM from 'react-dom/client'
import { MapsApp } from './MapsApp'
import './index.css'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiZWx0bzgyIiwiYSI6ImNsbjJvY21uaDA4c2MyanBhMnBmc2VxNjEifQ.AJhEq97As2olGZWZGHdxPA';



if (!navigator.geolocation) {
  alert('Your browser does not support geolocation')
  throw new Error('Your browser does not support geolocation')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
