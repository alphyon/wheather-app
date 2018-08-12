import transformForecast from '../services/transformForecast';
import transformWheatherData from '../services/transFormWheather';
export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";
export const SET_WEATHER = "SET_WEATHER";
export const SET_WEATHER_CITY = "SET_WEATHER_CITY";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });
const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

const api_key = "5ac71bb779d2ca403724ea013a90cc40";
const base_url = "https://api.openweathermap.org/data/2.5/forecast";
const base_url_weather = "https://api.openweathermap.org/data/2.5/weather";

export const setSelectedCity = payload => {
    return (dispatch, getState) => {
        const url = `${base_url}?q=${payload}&appid=${api_key}`;
        dispatch(setCity(payload))

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;
        
        const now = new Date();

        if(date && (now - date) < (1* 60 * 1000)){
            return;
        }
        return fetch(url).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);

                dispatch(setForecastData({ city: payload, forecastData }));
            });

    };
};

export const setWeather = payload => {

    return dispatch => {
        payload.forEach(city => {
            
            dispatch(getWeatherCity(city));

            const api_weather = `${base_url_weather}?q=${city}&appid=${api_key}`;
            fetch(api_weather).then( data => {
                return data.json();
            }).then( weather_data => {
                const weather = transformWheatherData(weather_data);
                dispatch(setWeatherCity({city, weather}));
            });
        });
    }

};
