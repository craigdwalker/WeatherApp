import Config from 'react-native-config';

export const fetchGeolocationByLocationQuery = async (query: string) => {
  let result = null;

  try {
    let url = `${Config.GEOLOCATION_API_URL}?q=${query}&limit=5&appid=${Config.WEATHER_API_TOKEN}`;
    console.log(url);

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
