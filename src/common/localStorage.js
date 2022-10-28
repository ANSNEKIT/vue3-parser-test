const hasKeyInLocalStorage = (key) => Boolean(localStorage.getItem(key));
const setLocalStorage = (key, payload) => localStorage.setItem(key, JSON.stringify(payload));
const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
};

export { hasKeyInLocalStorage, setLocalStorage, getLocalStorage };
