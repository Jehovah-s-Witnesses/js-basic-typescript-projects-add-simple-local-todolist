import 'bulma/bulma.scss';
import { Layout } from './components/layout/layout';
import { TodoCreateForm } from './components/todoCreateForm/todoCreateForm';
import { TodoList } from './components/todoList/todoList';
import { createState } from './services/createState.ts';

document.addEventListener('DOMContentLoaded', () => {
  const todosState = createState();

  Layout.render([TodoCreateForm.render(), TodoList.render()]);

  TodoList.updateLayout(todosState.state);
  TodoCreateForm.setOnAdd((newValue) => {
    todosState.addToState([newValue]);
    TodoList.updateLayout(todosState.state);
  });
});
