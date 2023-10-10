import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import Error from '../Error';

describe('Error', () => {
  describe('when no retry button title provided', () => {
    it(', only displays title and message', () => {
      render(
        <Error
          errorMessage="There has been an error"
          retryTitle={null}
          retryOnPress={null}
        />,
      );

      const title = screen.queryByText('Error!');
      const message = screen.queryByText('There has been an error');

      expect(title).toBeTruthy();
      expect(message).toBeTruthy();
      expect(() => screen.getByRole('button')).toThrow();
    });
  });
});

describe('Error', () => {
  describe('when retry button title provided but no on press', () => {
    it(', only displays title and message', () => {
      render(
        <Error
          errorMessage="There has been an error"
          retryTitle={null}
          retryOnPress={null}
        />,
      );

      const title = screen.queryByText('Error!');
      const message = screen.queryByText('There has been an error');

      expect(title).toBeTruthy();
      expect(message).toBeTruthy();
      expect(() => screen.getByRole('button')).toThrow();
    });
  });
});

describe('Error', () => {
  describe('when retry button title and on press provided', () => {
    it('renders with title, message and retry button', () => {
      const mockRetryOnPress = jest.fn();

      render(
        <Error
          errorMessage="There has been an error"
          retryTitle="Press Me"
          retryOnPress={mockRetryOnPress}
        />,
      );

      const title = screen.queryByText('Error!');
      const message = screen.queryByText('There has been an error');
      const retryButton = screen.queryByText('Press Me');

      expect(title).toBeTruthy();
      expect(message).toBeTruthy();
      expect(retryButton).toBeTruthy();
    });
  });
});

describe('Error', () => {
  describe('when retry button title and on press provided', () => {
    it('on press behaves as expected', () => {
      const mockRetryOnPress = jest.fn();

      render(
        <Error
          errorMessage="There has been an error"
          retryTitle="Press Me"
          retryOnPress={mockRetryOnPress}
        />,
      );

      const retryButton = screen.getByText('Press Me');

      fireEvent.press(retryButton);

      expect(mockRetryOnPress).toHaveBeenCalledTimes(1);
    });
  });
});
