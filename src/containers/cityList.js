import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.js';

class CityList extends Component {
    renderWeather(data) {
        const cityName = data.city.name;
        const temps = data.list.map(weather => Math.round(weather.main.temp - 273.15));
        const pressures = data.list.map(weather => Math.round(weather.main.pressure));
        const humidities = data.list.map(weather => Math.round(weather.main.humidity));        

        return (
            <tr key={cityName}>
                <td>{cityName}</td>
                <td><Chart data={temps} color={'orange'} metric={'C'} /></td>
                <td><Chart data={pressures} color={'red'} metric={'pHa'} /></td>
                <td><Chart data={humidities} color={'black'} metric={'%'} /></td>
            </tr>
        );
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(C)</th>
                        <th>Pressure(pHa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(CityList);