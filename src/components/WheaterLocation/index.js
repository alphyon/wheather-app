import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WheatherData';
import transformWheatherData from '../../services/transFormWheather';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import { PropTypes } from 'prop-types';

const api_key = "5ac71bb779d2ca403724ea013a90cc40";
const base_url = "http://api.openweathermap.org/data/2.5/weather"
class WeatherLocation extends Component {
    constructor({ city }) {
        super();
        this.state = {
            city,
            data: null,
        }
    }
    getApiData = () => {
        const { city } = this.state;
        const url = `${base_url}?q=${city}&appid=${api_key}`;
        fetch(url).then(data => {
            console.log(data);
            return data.json();
        }).then(wheather_data => {
            const data = transformWheatherData(wheather_data);
            this.setState({
                data,
            })
        });
    }
    componentWillMount() {
        this.getApiData();
    }
    render = () => {
        const {wheatherLocationClick} = this.props;
        const { city, data } = this.state;
        return (<div className="weatherLocationCont" onClick={wheatherLocationClick} >
            <Location city={city} />
            {data ? <WeatherData data={data} /> : <CircularProgress style={{ color: purple[500] }} thickness={7} />}
        </div>)
    };
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
    wheatherLocationClick : PropTypes.func,
}

export default WeatherLocation;