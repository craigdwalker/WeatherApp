import React from 'react';
import ForecastWeather from '../components/ForecastWeather';
import { RootStackParamList } from '../RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

function ForecastScreen({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'ForecastScreen'>) {
  const { lat, lon } = route.params;

  return (<ForecastWeather testID="forecastWeather" lat={lat} lon={lon}></ForecastWeather>)
};

export default ForecastScreen;
