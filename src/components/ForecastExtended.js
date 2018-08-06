import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './style.css';
import ForecastItem from './forecastItem/index';
import  CircularProgress  from '@material-ui/core/CircularProgress';
import transformForecast from '../services/transformForecast';


const api_key = "5ac71bb779d2ca403724ea013a90cc40";
const base_url = "https://api.openweathermap.org/data/2.5/forecast"
class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null,
        }
    
    }
    renderForecastItemsDays(forecastData) {
        return (
            forecastData.map((day, i) => (
                <ForecastItem key={i} weekDay={day.weekDay}
                    hour={day.hour} data={day.data} />))

        )
    }


    renderProgress = () => {
        return (<div>
            <CircularProgress /></div>)
    }

    updateCity = city =>{
        const url = `${base_url}?q=${city}&appid=${api_key}`;
        fetch(url).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState({
                    forecastData,
                });

            }
        )
    }
    componentDidMount() {
        this.updateCity(this.props.city);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({
                forecastData:null,
            })
        this.updateCity(nextProps.city);
        }
    }
    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecast-title">Pronóstico para {city}</h2>
                {
                    forecastData ?
                        this.renderForecastItemsDays(forecastData) :
                        this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;