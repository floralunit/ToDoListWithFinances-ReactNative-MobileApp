import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'MONTH_LIMIT';

export async function getMonthLimit() {
  const value = await AsyncStorage.getItem(KEY);
  return value ? Number(value) : 15000;
}

export async function setMonthLimit(value) {
  await AsyncStorage.setItem(KEY, value.toString());
}
