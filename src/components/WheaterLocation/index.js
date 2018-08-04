import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WheatherData';
import transformWheatherData from '../../services/transFormWheather';
const location = "San Salvador,sv";
const api_key = "5ac71bb779d2ca403724ea013a90cc40";
const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;


class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: "San Salvador",
            data: null,
        }
    }
    getApiData = () => {
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
    componentWillMount(){
        this.getApiData();
    }
    render = () => {
        const { city, data } = this.state;
        return (<div className="weatherLocationCont">
            <Location city={city} />
            {data ? <WeatherData data={data} />: `Cargando ...`}
        </div>)
    };
}

export default WeatherLocation;