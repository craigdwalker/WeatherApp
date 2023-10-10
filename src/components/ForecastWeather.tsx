import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import ForecastWeatherItem from './ForecastWeatherItem';
import LoadingSpinner from './LoadingSpinner';
import {fetchFiveDayWeatherForecast} from '../services/getWeather';
import Error from './Error';
import {ScrollView} from 'react-native-gesture-handler';

const ForecastWeather = ({testID, lat, lon}) => {
  const [isError, setIsError] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        setLoading(true);
        const data = await fetchFiveDayWeatherForecast(lat, lon);

        if (data) {
          var mappedData = data.daily.slice(0, 5).map(function (item, i) {
            const dayText = i + 1;

            return {
              key: i,
              day: 'Day ' + dayText,
              temp: item.temp.day,
              weatherDescription: item.weather[0].description,
            };
          });

          setWeatherData(mappedData);
          setLoading(false);
          setIsError(false);
        } else {
          setLoading(false);
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
        setLoading(false);
      }
    };

    getWeatherData();
  }, [isError]);

  function retryOnPress() {
    setIsError(false);
  }

  return (
    <>
      <View testID={testID}>
        {loading ? (
          <LoadingSpinner loadingMessage="Retrieving 5-day weather for your location..." />
        ) : null}

        {isError ? (
          <Error
            errorMessage="Unable to retrieve weather data. Please try again."
            retryTitle="Retry"
            retryOnPress={retryOnPress}
          />
        ) : null}

        {weatherData ? (
          <ScrollView>
            {weatherData.map(item => {
              return (
                <ForecastWeatherItem
                  key={item.key}
                  day={item.day}
                  temperature={item.temp}
                  weatherDescription={item.weatherDescription}
                />
              );
            })}
          </ScrollView>
        ) : null}
      </View>
    </>
  );
};

export default ForecastWeather;
