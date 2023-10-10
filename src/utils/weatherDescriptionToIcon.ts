import {
  IconAtmosphere,
  IconCloud,
  IconRain,
  IconSnow,
  IconStorm,
  IconSunny,
} from '../assets/weather';

export const getWeatherIconNameByDescription = (description: string) => {
  let iconName = IconAtmosphere;

  if (description.includes('clear')) {
    iconName = IconSunny;
  } else if (description.includes('cloud')) {
    iconName = IconCloud;
  } else if (description.includes('thunderstorm')) {
    iconName = IconStorm;
  } else if (description.includes('drizzle')) {
    iconName = IconRain;
  } else if (description.includes('rain')) {
    iconName = IconRain;
  } else if (description.includes('snow')) {
    iconName = IconSnow;
  }

  return iconName;
};
