import {describe, expect, test} from '@jest/globals';
import {fetchGeolocationByLocationQuery} from '../getGeoLocation';

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('fetchGeolocationByLocationQuery', () => {
  describe('when fetch returns an ok response', () => {
    test('should return correct response data', async () => {
      const jsonResponseString = JSON.stringify([
        {
          lat: 51.5073219,
          lon: -0.1276474,
        },
      ]);
      fetchMock.mockResponseOnce(jsonResponseString);

      const result = await fetchGeolocationByLocationQuery('London');

      expect(result[0].lat).toEqual(51.5073219);
      expect(result[0].lon).toEqual(-0.1276474);
    });
  });
});

describe('fetchGeolocationByLocationQuery', () => {
  describe('when fetch does not return a response', () => {
    test('should return empty array', async () => {
      fetchMock.mockResponseOnce('{}', {status: 500});

      const result = await fetchGeolocationByLocationQuery('London');

      expect(result).toBeNull();
    });
  });
});

describe('fetchGeolocationByLocationQuery', () => {
  describe('when fetch throws an error', () => {
    test('should return empty array', async () => {
      fetchMock.mockRejectOnce(new Error('An error'));

      const result = await fetchGeolocationByLocationQuery('London');

      expect(result).toBeNull();
    });
  });
});
