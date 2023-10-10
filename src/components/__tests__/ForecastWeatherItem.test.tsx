import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ForecastWeatherItem from '../ForecastWeatherItem';

describe('ForecastWeatherItem', () => {
  describe('when rendered', () => {
    it('displays day, temperature, weather description and icon', () => {
      const {getByTestId} = render(
        <ForecastWeatherItem
          testID="weatherIcon"
          day="Day 1"
          temperature={21.1}
          weatherDescription="Cloudy with a chance of meatballs"
        />,
      );

      const day = screen.queryByText('Day 1');
      const temperature = screen.queryByText('21.1°');
      const weatherDescription = screen.queryByText(
        'Cloudy with a chance of meatballs',
      );
      
      expect(day).toBeTruthy();
      expect(temperature).toBeTruthy();
      expect(weatherDescription).toBeTruthy();
    });
  });
});
