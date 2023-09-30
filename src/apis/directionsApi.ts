import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
    access_token:
      "pk.eyJ1IjoiZWx0bzgyIiwiYSI6ImNsbjJvY21uaDA4c2MyanBhMnBmc2VxNjEifQ.AJhEq97As2olGZWZGHdxPA",
  },
});

export default directionsApi;
