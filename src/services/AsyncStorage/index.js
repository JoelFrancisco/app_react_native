import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    console.error(err);
  }
}

const storeDataObject = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {
    console.error(err);
  }
}

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value != null) {
      return value;
    }
  } catch(err) {
    console.error(err);
  }
}

const getDataObject = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(err) {
    console.error(err);
  }
}

export { storeData, getData, storeDataObject, getDataObject }