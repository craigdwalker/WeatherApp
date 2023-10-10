import React from 'react';
import {render, screen} from '@testing-library/react-native';
import LoadingSpinner from '../LoadingSpinner';

describe('LoadingSpinner', () => {
  describe('when rendered', () => {
    it(', displays the correct placeholder text', () => {
      render(<LoadingSpinner loadingMessage="Loading..." />);

      const loadingText = screen.queryByText('Loading...');

      expect(loadingText).toBeTruthy();
    });
  });
});
