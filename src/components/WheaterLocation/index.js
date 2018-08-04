import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WheatherData';
import { RAIN, SUN, WINDY } from '../../constants/wheater';
const location = "San Salvador,sv";
const api_key = "5ac71bb779d2ca403724ea013a90cc40";
const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;
const data1 = {
    temperature: 10,
    weatherState: WINDY,
    humidity: 56,
    wind: 20,
}

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: "San Salvador",
            data: data1,
        }
    }

    getWheatherState = wheather => {
        const  wheatherStatus  = wheather.main;
        let type;
        if (wheatherStatus == "Rain") {
            type = RAIN;
        } else {
            type = SUN;
        }

        return type;
    }
    getWheatherData = (wheather_data) => {
        const { humidity, temp } = wheather_data.main;
        const { speed } = wheather_data.wind;
        const wheatherState = this.getWheatherState(wheather_data.weather[0]);

        const data = {
            temperature: Math.ceil(temp - 273.25),
            weatherState: wheatherState,
            humidity,
            wind: speed,

        }

        return data;
    }

    handleUpdateClick = () => {
        fetch(url).then(data => {
            console.log(data);
            return data.json();
        }).then(wheather_data => {
            const data = this.getWheatherData(wheather_data);
            this.setState({
                data,
            })
        });
    }
    render = () => {
        const { city, data } = this.state;
        return (<div className="weatherLocationCont">
            <Location city={city} />
            <WeatherData data={data} />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>)
    };
}

export default WeatherLocation;