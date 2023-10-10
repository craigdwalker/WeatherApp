import fetchMock from "jest-fetch-mock";
import '@testing-library/jest-native/extend-expect'

fetchMock.enableMocks();

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

jest.mock('react-native/Libraries/Utilities/Platform', () => {
  let platform = {
    OS: 'ios',
  }

  const select = jest.fn().mockImplementation((obj) => {
    const value = obj[platform.OS]
    return !value ? obj.default : value
  })

  platform.select = select

  return platform
});