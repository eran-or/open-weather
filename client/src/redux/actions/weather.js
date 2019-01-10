import { REQUEST_WEATHER, RECEIVE_WEATHER } from './actionTypes'
import moment from 'moment'

function requestWeather() {
  return {
    type: REQUEST_WEATHER
  }
}
function receiveWeather(weather) {
  
  return {
    type: RECEIVE_WEATHER,
    weather,
    receivedAt: Date.now()
  }
}

export const fetchWeather = (city, country) => {
  const start = moment().subtract(5,'days').valueOf()
  const end = moment().valueOf()

  const AppID = '14b8fec9d1b5dabe0b20d46050458d51'
  const encodeCity = encodeURIComponent(`${city}`)
  const encodeCountry = country?encodeURIComponent(`${country}`):'IL'
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeCity},${encodeCountry}&units=metric&type=hour&start=${start}&end=${end}&APPID=${AppID}`
  return dispatch => {
    dispatch(requestWeather())
    return fetch(weatherUrl)
    .then(res => res.json())
    .then(json => dispatch(receiveWeather(json)))
    .catch(e => console.log(e))
  }
}

export const updateWeather = (city) => {
  fetchWeather(city)
}