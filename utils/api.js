import { AsyncStorage } from 'react-native';

export const DECK_STORAGE_KEY = 'STORED_DECKS';

export const _loadData = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(resaults => JSON.parse(resaults));
};

export const _setData = data => {
  return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
};

export const _submitDeckEntry = (entry, key) => {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [key]: entry,
    })
  );
};

export const _removeEntry = kay => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(resaults => {
    const data = JSON.parse(resaults);
    data[kay] = undefined;
    delete data[kay];

    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
  });
};
