import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../redux/actions'
import LineChart from './LineChart'
import Form from './Form'

export class Home extends Component {
  state = {
    location: ""
  }

  handleCityChanged = (e) => {
    const location = e.target.value
    this.setState({ location })
  }

  fetchWeather = () => {
    let [city, country] = this.state.location.split(',')
    this.props.fetchWeather(city, country)
  }
  render() {
    const { weather } = this.props
    const { main = {} } = weather
    const { location } = this.state

    const data = {
      "09/01/2019": 25,
      "08/01/2019": 27,
      "07/01/2019": 27,
      "06/01/2019": 28,
      "05/01/2019": 29
    }

    const width = 500, height = 350

    return <div className="container col-sm-8 col-12">
      <Form value={location} handleClick={this.fetchWeather} handleChanged={this.handleCityChanged} />
      <div className="temperature-box col">
        {weather.message && <div className="alert alert-danger">{weather.message}</div>}
        {main.temp && <div>Current Temperature in <strong>{weather.name}: {main.temp}</strong></div>}
      </div>
      <div className="row justify-content-around">
          <LineChart data={data} width={width} height={height} />
        <img style={{width:165,height:165}} src="https://via.placeholder.com/165.png?text=Gauge" alt="" />
      </div>
    </div>
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather
})

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: (city, country) => dispatch(fetchWeather(city, country))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)