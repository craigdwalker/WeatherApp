import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import CurrentWeatherItem from '../CurrentWeatherItem';

describe('CurrentWeatherItem', () => {
  describe('when entered location provided', () => {
    it('renders with expected title and buttons', () => {
      render(
        <CurrentWeatherItem
          lat={1.0}
          lon={1.0}
          weatherDescription="Lots of rain"
          temperature={32.1}
          enteredLocation="London"
          saveLocationOnPress={null}
          viewMyLocationOnPress={null}
        />,
      );

      const title = screen.queryByText('London');
      const saveMyLocationButton = screen.queryByText('Save Current Location');
      const retryButton = screen.queryByText('View My Location');

      expect(title).toBeTruthy();
      expect(saveMyLocationButton).toBeTruthy();
      expect(retryButton).toBeTruthy();
    });
  });
});

describe('CurrentWeatherItem', () => {
  describe('when entered location provided', () => {
    it('save my location on press behaves as expected', () => {
      const mockSaveMyLocationOnPress = jest.fn();

      render(
        <CurrentWeatherItem
          lat={1.0}
          lon={1.0}
          weatherDescription="Lots of rain"
          temperature={32.1}
          enteredLocation="London"
          saveLocationOnPress={mockSaveMyLocationOnPress}
          viewMyLocationOnPress={null}
        />,
      );

      const saveMyLocationButton = screen.getByText('Save Current Location');

      fireEvent.press(saveMyLocationButton);

      expect(mockSaveMyLocationOnPress).toHaveBeenCalledTimes(1);
    });
  });
});
