import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './style.css';
import ForecastItem from './forecastItem/index';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
];
const data = {
    temperature: 10,
    weatherState: 'normal',
    humidity: 5.6,
    wind: 12,
}
class ForecastExtended extends Component {

    renderForecastItemsDays() {
        return (
            days.map((day,i) => (
                <ForecastItem key={i} weekDay={day} hour={10} data={data}/>))

        )
    }

    render() {
        const { city } = this.props;
        return (
            <div>
                <h2 className="forecast-title">Pronóstico para {city}</h2>
                {this.renderForecastItemsDays()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;