import React, { useEffect, useState } from 'react';
import Error from '../components/Error';
import CurrentWeather from '../components/CurrentWeather';
import { getLocationPermission, getCurrentLocation } from '../services/getCurrentLocation'
import Location from '../models/Location';
import LoadingSpinner from '../components/LoadingSpinner'

function HomeScreen() {

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true);
  const [locationPermission, setLocationPermission] = useState(false)
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {

    const getLocation = async () => {
      setLoading(true)
      const permission = await getLocationPermission()
      setLocationPermission(permission)

      if (permission) {
        getCurrentLocation(
          position => {
            setLoading(false)
            setError(false)
            setLocation({ lat: position.latitude, lon: position.longitude })
          },
          error => {
            setLoading(false)
            setError(true)
          },
        )
      } else {
        setLoading(false)
        setError(true)
      }
    }

    getLocation()
  }, []);

  return (
    <>
      {loading ? <LoadingSpinner loadingMessage='Retrieving your current location...' /> : null}

      { error ? <Error errorMessage='Unable to access your location. Please check your permissions.' retryTitle='' retryOnPress={null} /> : null}

      {locationPermission && location?.lat && location?.lon ? <CurrentWeather lat={location.lat} lon={location.lon} /> : null}
    </>
  );
};

export default HomeScreen;
