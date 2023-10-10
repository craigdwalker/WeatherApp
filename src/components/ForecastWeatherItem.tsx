import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {getWeatherIconNameByDescription} from '../utils/weatherDescriptionToIcon';
import {Color} from '../theme/Colors';
import {Spacing} from '../theme/Spacing';
import {textStyle} from '../theme/styles/TextStyles';

const ForecastWeatherItem = ({testID, day, weatherDescription, temperature}) => {
  const weatherIconName = getWeatherIconNameByDescription(weatherDescription);

  return (
    <View style={styles.container}>
      <Text style={textStyle.titleMedium}>{day}</Text>
      <Text style={textStyle.bodyMedium}>{temperature}°</Text>
      <Image testID={testID} source={weatherIconName} />
      <Text style={textStyle.bodyMedium}>{weatherDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: Spacing.small,
    padding: Spacing.xlarge,
    justifyContent: 'center',
    backgroundColor: Color.background,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default ForecastWeatherItem;
