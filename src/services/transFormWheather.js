import { RAIN, SUN, THUNDER } from "../constants/wheater";

const getWheatherState = wheather => {
    const wheatherStatus = wheather.main;
    let type;
    if (wheatherStatus === "Rain") {
        type = RAIN;
    } else if (wheatherStatus === "Thunderstorm") {
        type = THUNDER;
    } else {
        type = SUN;
    }

    return type;
}

const getTemperature = temperature => {
    return Math.ceil(temperature - 273.25)
}
const transformWheatherData = (wheather_data) => {
    const { humidity, temp } = wheather_data.main;
    const { speed } = wheather_data.wind;
    const wheatherState = getWheatherState(wheather_data.weather[0]);

    const data = {
        temperature: getTemperature(temp),
        weatherState: wheatherState,
        humidity,
        wind: speed,

    }

    return data;
}

export default transformWheatherData;