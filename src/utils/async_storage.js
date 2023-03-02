import AsyncStorage from "@react-native-async-storage/async-storage";

export const set = async (key, value) => {
  console.log("AsyncStorage SAVE: ", key, value);
  const serialized = JSON.stringify(value);
  return await AsyncStorage.setItem(key, serialized);
};

export const get = async (key) => {
  console.log("AsyncStorage LOAD: ", key);
  const raw = await AsyncStorage.getItem(key);
  return JSON.parse(raw);
};

export const remove = async (key) => {
  return await AsyncStorage.removeItem(key);
};

export const clear = async () => {
  console.log("AsyncStorage CLEAR");
  return await AsyncStorage.clear();
};
