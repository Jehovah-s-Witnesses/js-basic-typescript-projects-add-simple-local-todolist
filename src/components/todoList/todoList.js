import { generateId } from '../../services/generateId.js';

export const TodoList = {
  wrapper: null,
  createTodoHTML(id, title, description) {
    return `
    <a class="panel-block" data-id="${id}">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      ${title} - ${description}
    </a>
    `;
  },
  updateLayout(todos = []) {
    this.wrapper.innerHTML = '';
    const wrapperElement = document.createElement('nav');
    wrapperElement.classList.add('panel');

    const isEmptyList = todos.length === 0;
    const title = isEmptyList
      ? 'You have not any todos:( Maybe create first?'
      : `Your todos( ${todos.length} ):`;

    const items = isEmptyList
      ? [
          this.createTodoHTML(
            generateId(),
            'Create first todo',
            'Your list is empty',
          ),
        ]
      : todos.map((todo) =>
          this.createTodoHTML(todo.id, todo.title, todo.description),
        );
    wrapperElement.innerHTML = `
    <p class="panel-heading">${title}</p>
    ${items.join('')}
    `;

    this.wrapper.append(wrapperElement);
  },
  render() {
    const wrapperElement = document.createElement('div');

    wrapperElement.classList.add('pt-6');
    this.wrapper = wrapperElement;
    this.updateLayout();

    return wrapperElement;
  },
};
