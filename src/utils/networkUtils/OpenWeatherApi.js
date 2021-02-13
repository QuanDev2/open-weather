import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/forecast'
const API_KEY = process.env.REACT_APP_APIKEY

export function buildGetReq(city) {
  return axios.create({
    baseURL: URL,
    timeout: 1000,
    params: {
      q: city,
      appid: API_KEY,
      units: 'imperial'
    }
  })
}
