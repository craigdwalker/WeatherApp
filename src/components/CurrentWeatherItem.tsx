import React from 'react';
import {Button, Image, Text, View, StyleSheet} from 'react-native';
import {getWeatherIconNameByDescription} from '../utils/weatherDescriptionToIcon';
import {useNavigation} from '@react-navigation/native';
import {Spacing} from '../theme/Spacing';
import {Color} from '../theme/Colors';
import {textStyle} from '../theme/styles/TextStyles';
import {ForecastScreenProps} from '../RootStackParamList';

const CurrentWeatherItem = ({
  lat,
  lon,
  weatherDescription,
  temperature,
  enteredLocation,
  viewMyLocationOnPress,
  saveLocationOnPress,
}) => {
  const weatherIconName = getWeatherIconNameByDescription(weatherDescription);

  const navigation = useNavigation<ForecastScreenProps>();

  return (
    <View style={styles.container}>
      <Text style={textStyle.titleMedium}>
        {enteredLocation?.length > 0 ? enteredLocation : 'My Location'}
      </Text>
      <Text style={textStyle.bodyMedium}>{temperature}°</Text>
      <Image accessibilityRole="image" source={weatherIconName} />
      <Text style={textStyle.bodyMedium}>{weatherDescription}</Text>
      <View>
        <Button
          color={Color.primary}
          title="View 5-Day Forecast"
          onPress={() =>
            navigation.navigate('ForecastScreen', {
              lat: lat,
              lon: lon,
            })
          }
        />
        {enteredLocation ? (
          <View>
            <Button
              color={Color.primary}
              title="Save Current Location"
              onPress={saveLocationOnPress}
            />
            <Button
              color={Color.primary}
              title="View My Location"
              onPress={viewMyLocationOnPress}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: Spacing.small,
    paddingTop: Spacing.large,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default CurrentWeatherItem;
