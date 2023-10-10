import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import {fetchCurrentWeather} from '../services/getWeather';
import CurrentWeatherItem from './CurrentWeatherItem';
import LoadingSpinner from './LoadingSpinner';
import Error from './Error';
import SearchInput from './SearchInput';
import {fetchGeolocationByLocationQuery} from '../services/getGeoLocation';
import {saveLocationAsFavorite} from '../services/saveLocationFavorites';
import Location from '../models/Location';

const CurrentWeather = ({lat, lon}) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [searchText, setSearchText] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [locationNameToSave, setLocationNameToSave] = useState('');
  const [location, setLocation] = useState<Location>({lat: lat, lon: lon});

  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true);

      try {
        if (searchText?.length > 0) {
          const locationByQuery = await fetchGeolocationByLocationQuery(
            searchText,
          );

          if (locationByQuery) {
            setLocation({
              lat: locationByQuery[0].lat,
              lon: locationByQuery[0].lon,
            });
          } else {
            setErrorState();
          }
        } else {
          setLocation({lat: lat, lon: lon});
        }

        const currentWeatherData = await fetchCurrentWeather(
          location?.lat,
          location?.lon,
        );

        if (currentWeatherData != null) {
          setWeatherData(currentWeatherData);
          setLoading(false);
          setIsError(false);
        } else {
          setErrorState();
        }
      } catch (error) {
        setErrorState();
      }
    };

    getWeatherData();
  }, [searchText, isError]);

  useEffect(() => {
    const updateFavourites = async () => {
      if (locationNameToSave.length > 0) {
        const result = await saveLocationAsFavorite(locationNameToSave);

        if (result) {
          setLocationNameToSave('');
          Alert.alert('Success', 'Saved favourite');
        } else {
          Alert.alert('Error', 'Unable to save favourite');
        }
      }
    };

    updateFavourites();
  }, [locationNameToSave]);

  function setErrorState() {
    setLoading(false);
    setIsError(true);
  }

  function retryOnPress() {
    setIsError(false);
    setLoading(true);
  }

  function saveLocation(locationName: string) {
    setLocationNameToSave(locationName);
  }

  function viewMyLocation() {
    setSearchText('');
  }

  return (
    <>
      <View>
        {loading ? (
          <LoadingSpinner loadingMessage="Retrieving weather for your location..." />
        ) : null}

        {isError ? (
          <Error
            errorMessage="Unable to retrieve weather data. Please try again."
            retryTitle="Retry"
            retryOnPress={retryOnPress}
          />
        ) : null}

        {weatherData && weatherData.weather ? (
          <View>
            <SearchInput
              placeholder="Enter City (e.g London)"
              textSubmitted={text => setSearchText(text)}
            />
            <CurrentWeatherItem
              lat={location.lat}
              lon={location.lon}
              temperature={weatherData.temp}
              weatherDescription={weatherData.weather[0].description}
              enteredLocation={searchText}
              saveLocationOnPress={() => saveLocation(searchText)}
              viewMyLocationOnPress={viewMyLocation}
            />
          </View>
        ) : null}
      </View>
    </>
  );
};

export default CurrentWeather;
