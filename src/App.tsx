import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ForecastScreen from './screens/ForecastScreen';
import {RootStackParamList} from './RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="ForecastScreen"
          component={ForecastScreen}
          options={{title: 'Forecast'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
