import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 4,
    language: "es",
    access_token:
      "pk.eyJ1IjoiZWx0bzgyIiwiYSI6ImNsbjJvY21uaDA4c2MyanBhMnBmc2VxNjEifQ.AJhEq97As2olGZWZGHdxPA",
  },
});

export default searchApi;
