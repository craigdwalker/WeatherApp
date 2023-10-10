import {describe, expect, test} from '@jest/globals';
import {
  IconAtmosphere,
  IconCloud,
  IconRain,
  IconSnow,
  IconStorm,
  IconSunny,
} from '../../assets/weather';
import {getWeatherIconNameByDescription} from '../weatherDescriptionToIcon';

describe('getWeatherIconNameByDescription', () => {
  describe('when given a description that contains the word clear', () => {
    test('should return sunny icon', () => {
      const result = getWeatherIconNameByDescription('clear day');

      expect(result).toEqual(IconSunny);
    });
  });
});

describe('getWeatherIconNameByDescription', () => {
  describe('when given a description that contains the word cloud', () => {
    test('should return cloud icon', () => {
      const result = getWeatherIconNameByDescription('cloudy with a chance of');

      expect(result).toEqual(IconCloud);
    });
  });
});

describe('getWeatherIconNameByDescription', () => {
  describe('when given a description that contains the word thunderstorm', () => {
    test('should return storm icon', () => {
      const result = getWeatherIconNameByDescription('big thunderstorm');

      expect(result).toEqual(IconStorm);
    });
  });
});

describe('getWeatherIconNameByDescription', () => {
  describe('when given a description that contains the word drizzle', () => {
    test('should return rain icon', () => {
      const result = getWeatherIconNameByDescription('lots of drizzle');

      expect(result).toEqual(IconRain);
    });
  });
});

describe('getWeatherIconNameByDescription', () => {
  describe('when given a description that contains the word rain', () => {
    test('should return rain icon', () => {
      const result = getWeatherIconNameByDescription('rain rain go away');

      expect(result).toEqual(IconRain);
    });
  });
});

describe('getWeatherIconNameByDescription', () => {
  describe('when given a description that contains the word snow', () => {
    test('should return snow icon', () => {
      const result = getWeatherIconNameByDescription(
        'will you help me build a snowman?',
      );

      expect(result).toEqual(IconSnow);
    });
  });
});

describe('getWeatherIconNameByDescription', () => {
  describe('when given a description that contains unexpected word', () => {
    it('should return atmosphere icon', () => {
      const result = getWeatherIconNameByDescription(
        'we cannot describe this weather',
      );

      expect(result).toEqual(IconAtmosphere);
    });
  });
});
