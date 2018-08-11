import transformForecast from '../services/transformForecast';
export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA ="SET_FORECAST_DATA";
const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload =>({type: SET_FORECAST_DATA, payload});

const api_key = "5ac71bb779d2ca403724ea013a90cc40";
const base_url = "https://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    return dispatch => {
        const url = `${base_url}?q=${payload}&appid=${api_key}`;
         dispatch(setCity(payload))
         return fetch(url).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
            
                dispatch(setForecastData({city:payload, forecastData}));
            });
        
    };
};


