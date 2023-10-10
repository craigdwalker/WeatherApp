import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  HomeScreen: undefined,
  ForecastScreen: { lat: number, lon: number };
};

export type ForecastScreenProps = StackNavigationProp<
    RootStackParamList,
    'ForecastScreen'
  >;