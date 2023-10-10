import AsyncStorage from '@react-native-async-storage/async-storage';

const favoritesKeyName = 'favorites';

export const saveLocationAsFavorite = async (locationName: string) => {
  let result = false;

  try {
    var favoriteLocations = await getFavoriteLocations();

    const newItemValue = favoriteLocations
      ? favoriteLocations.concat(',' + locationName)
      : locationName + ',';
    await AsyncStorage.setItem(favoritesKeyName, newItemValue);

    result = true;
  } catch (error) {
    console.log(error);
  }

  return result;
};

const getFavoriteLocations = async () => {
  let result = null;

  try {
    var favorites = (await AsyncStorage.getItem(favoritesKeyName)) || null;

    result = favorites;
  } catch (error) {
    console.log(error);
  }

  return result;
};
