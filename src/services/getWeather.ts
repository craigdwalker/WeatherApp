import Config from 'react-native-config';

export const fetchCurrentWeather = async (lat: number, long: number) => {
  let result = null;

  try {
    let url = `${Config.WEATHER_API_URL}?lat=${lat}&lon=${long}&units=metric&appid=${Config.WEATHER_API_TOKEN}`;

    console.log(url);
    const response = await fetch(url);

    if (response.ok) {
      const json = await response.json();
      result = json.current;
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

export const fetchFiveDayWeatherForecast = async (lat: number, lon: number) => {
  let result = null;

  let url = `${Config.WEATHER_API_URL}?lat=${lat}&lon=${lon}&units=metric&&appid=${Config.WEATHER_API_TOKEN}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const json = await response.json();
      result = json;
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};
