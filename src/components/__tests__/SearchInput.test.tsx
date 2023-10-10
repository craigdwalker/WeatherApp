import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import SearchInput from '../SearchInput';

describe('SearchInput', () => {
  describe('when rendered', () => {
    it('displays the correct placeholder text', () => {
      const mockTextSubmitted = jest.fn();

      render(
        <SearchInput
          placeholder="Placeholder text"
          textSubmitted={mockTextSubmitted}
        />,
      );

      const textInput = screen.getByRole('search');
      expect(textInput).toHaveProp('placeholder', 'Placeholder text');
    });
  });
});

describe('SearchInput', () => {
  describe('when keyboard return submitted,', () => {
    it('calls the textSubmitted function', () => {
      const mockTextSubmitted = jest.fn();

      render(
        <SearchInput
          placeholder="Placeholder text"
          textSubmitted={mockTextSubmitted}
        />,
      );

      const textInput = screen.getByRole('search');
      fireEvent(textInput, 'submitEditing', {nativeEvent: {}});

      expect(mockTextSubmitted.mock.calls.length).toEqual(1);
    });
  });
});
