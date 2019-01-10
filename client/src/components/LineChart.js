import React, { Component } from "react"
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

class LineChartWrapper extends Component {

  render() {
    const {width, height, data} =this.props
    return <LineChart width={width} height={height} data={data} />
  }
}

export default LineChartWrapper;