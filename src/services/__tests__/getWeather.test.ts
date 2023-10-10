import {describe, expect, test} from '@jest/globals';
import {fetchCurrentWeather, fetchFiveDayWeatherForecast} from '../getWeather';

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('fetchCurrentWeather', () => {
  describe('when fetch returns an ok response', () => {
    test('should return  icon', async () => {
      const jsonResponseString = JSON.stringify({
        current: {
          temp: 292.55,
          weather: [
            {
              main: 'Clouds',
              description: 'broken clouds',
            },
          ],
        },
      });
      fetchMock.mockResponseOnce(jsonResponseString);

      const result = await fetchCurrentWeather(1.0, 1.0);

      expect(result.temp).toEqual(292.55);
      expect(result.weather[0].description).toEqual('broken clouds');
    });
  });
});

describe('fetchCurrentWeather', () => {
  describe('when fetch does not return a response', () => {
    test('should return empty array', async () => {
      fetchMock.mockResponseOnce('{}', {status: 500});

      const result = await fetchCurrentWeather(1.0, 1.0);

      expect(result).toEqual([]);
    });
  });
});

describe('fetchCurrentWeather', () => {
  describe('when fetch throws an error', () => {
    it('should return empty array', async () => {
      fetchMock.mockRejectOnce(new Error('An error'));

      const result = await fetchCurrentWeather(1.0, 1.0);

      expect(result).toEqual([]);
    });
  });
});

describe('fetchFiveDayWeatherForecast', () => {
  describe('when fetch returns an ok response', () => {
    test('should return valid temp and description', async () => {
      const jsonResponseString = JSON.stringify({
        daily: [
          {
            dt: 1684951200,
            temp: {day: 299.03},
            weather: [
              {id: 500, main: 'Rain', description: 'light rain', icon: '10d'},
            ],
          },
        ],
      });
      fetchMock.mockResponseOnce(jsonResponseString);

      const result = await fetchFiveDayWeatherForecast(1.0, 1.0);

      expect(result.daily[0].temp.day).toEqual(299.03);
      expect(result.daily[0].weather[0].description).toEqual('light rain');
    });
  });
});

describe('fetchFiveDayWeatherForecast', () => {
  describe('when fetch does not return a response', () => {
    test('should return null', async () => {
      fetchMock.mockResponseOnce('{}', {status: 500});

      const result = await fetchFiveDayWeatherForecast(1.0, 1.0);

      expect(result).toBeNull();
    });
  });
});

describe('fetchFiveDayWeatherForecast', () => {
  describe('when fetch throws an error', () => {
    test('should return null', async () => {
      fetchMock.mockRejectOnce(new Error('An error'));

      const result = await fetchFiveDayWeatherForecast(1.0, 1.0);

      expect(result).toBeNull();
    });
  });
});
