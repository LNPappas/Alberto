import axios from "axios";

const BaseUrl = "'https://weather-api-by-any-city.p.rapidapi.com/weather/";

export const serverClient = axios.create({
  baseURL: BaseUrl,
  headers: {
    "X-RapidAPI-Key": "80d1b10cb0mshe34b0eb53cf0a02p1fed07jsn893bd88913f3",
    "X-RapidAPI-Host": "weather-api-by-any-city.p.rapidapi.com",
  },
});
