const removeArrayItem = (array = [], item = null) => {
  const index = array.indexOf(item);
  array.splice(index, 1);
  return array;
};
const getLocalStorage = (key) => {
 return localStorage.getItem(key);
};
const setObjectLocalStorage = (key, object) => {
 localStorage.setItem(key, JSON.stringify(object));
};
const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
module.exports = {
  removeArrayItem,
  getLocalStorage,
  setLocalStorage,
  setObjectLocalStorage,
  removeLocalStorage,
};
