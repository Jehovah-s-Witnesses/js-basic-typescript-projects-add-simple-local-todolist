const storageKey = '_todos_storage';

export const createState = () => {
  const stateFromLocalStorage = localStorage.getItem(storageKey);
  const state = stateFromLocalStorage ? JSON.parse(stateFromLocalStorage) : [];

  if (!stateFromLocalStorage) {
    localStorage.setItem(storageKey, JSON.stringify([]));
  }

  return {
    state,
    addToState(newValues) {
      state.push(...newValues);

      localStorage.setItem(storageKey, JSON.stringify(state));
    },
  };
};
