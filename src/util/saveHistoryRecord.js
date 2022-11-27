const key = "History";
export const saveHistory = (value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
export const getHistory = () => {
  return JSON.parse(window.localStorage.getItem(key)) || [];
};
export const removeHistory = () => {
  window.localStorage.removeItem(key);
};
