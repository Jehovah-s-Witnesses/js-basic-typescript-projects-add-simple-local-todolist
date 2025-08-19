import type { Todo } from '../Types/todo.ts';

const storageKey = '_todos_storage';

export const createState = (): {
  state: Todo[];
  addToState(newTodos: Todo[]): void;
} => {
  const stateFromLocalStorage = localStorage.getItem(storageKey);
  const state: Todo[] = stateFromLocalStorage
    ? JSON.parse(stateFromLocalStorage)
    : [];

  if (!stateFromLocalStorage) {
    localStorage.setItem(storageKey, JSON.stringify([]));
  }

  return {
    state,
    addToState(newValues: Todo[]) {
      state.push(...newValues);

      localStorage.setItem(storageKey, JSON.stringify(state));
    },
  };
};
