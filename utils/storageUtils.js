const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
};

// named export
export { saveToLocalStorage, getFromLocalStorage };

// default export
// export default add;
