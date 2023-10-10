import Geolocation from 'react-native-geolocation-service';
import {Platform} from 'react-native';
import {request, PERMISSIONS, check} from 'react-native-permissions';

export enum LocationError {
  PERMISSION_NOT_GRANTED = 1,
  INTERNAL_ERROR = -1,
}

type LocationFoundCallback = (position: Geolocation.GeoCoordinates) => void;

type LocationNotFoundCallback = (errorCode: LocationError) => void;

export const getLocationPermission = async () => {
  let result = false;

  const locationPermission = await hasLocationPermission();

  if (!locationPermission) {
    var requestResult = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );

    result = requestResult === 'granted';
  } else {
    result = locationPermission;
  }

  return result;
};

export const getCurrentLocation = (
  successCallback: LocationFoundCallback,
  errorCallback: LocationNotFoundCallback,
) => {
  Geolocation.getCurrentPosition(
    position => {
      successCallback(position.coords);
    },
    error => {
      console.log(error);
      errorCallback(LocationError.INTERNAL_ERROR);
    },
    {enableHighAccuracy: true, timeout: 15000},
  );
};

const hasLocationPermission = async () => {
  const result = await check(
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  );

  return result == 'granted';
};
