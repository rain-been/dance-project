const key = "TabIndex";
export const saveTabIndex = (value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
export const getTabIndex = () => {
  return JSON.parse(window.localStorage.getItem(key)) || 0;
};
export const removeTabIndex = () => {
  window.localStorage.removeItem(key);
};
