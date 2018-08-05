import { RAIN, SUN, THUNDER, CLOUD, CLOUDY } from "../constants/wheater";

const getWheatherState = weather => {
    const { id } = weather[0];
    let type;
    if (id < 200) {
        type = THUNDER;
    } else if (id < 500) {
        type = RAIN;
    } else if (id === 800) {
        type = SUN;
    } else if (id < 800) {
        type = CLOUDY;
    } else {
        type = CLOUD
    }

    return type;
}

const getTemperature = temperature => {
    return Math.ceil(temperature - 273.25)
}
const transformWheatherData = (wheather_data) => {
    const { weather } = wheather_data;
    const { humidity, temp } = wheather_data.main;
    const { speed } = wheather_data.wind;
    const wheatherState = getWheatherState(weather);

    const data = {
        temperature: getTemperature(temp),
        weatherState: wheatherState,
        humidity,
        wind: speed,

    }

    return data;
}

export default transformWheatherData;