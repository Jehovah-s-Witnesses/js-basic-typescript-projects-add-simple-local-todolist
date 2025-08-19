import { generateId } from '../../services/generateId.ts';
import { createValidator } from '../../services/createValidator.js';
import { todoCreateFormSchema } from './todoCreateForm.schema.js';
import { getAjvErrorKey } from '../../utils/getAjvErrorKey.js';

export const TodoCreateForm = {
  onAdd: null,
  setOnAdd(onAdd) {
    this.onAdd = onAdd;
  },
  initialize(formElement) {
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(formElement);
      const data = Object.fromEntries(formData);
      const validate = createValidator(todoCreateFormSchema);

      const isValid = validate(data);

      if (!isValid) {
        validate.errors.forEach((error) => {
          const fieldName = getAjvErrorKey(error.instancePath);
          const inputElement = formElement.elements[fieldName];
          const fieldWrapper = inputElement.closest('.field');
          const errorMessageElement = document.createElement('p');

          errorMessageElement.classList.add('help', 'is-danger');
          errorMessageElement.innerText = error.message;
          inputElement.classList.add('is-danger');
          fieldWrapper.append(errorMessageElement);
        });

        return;
      } else {
        // Clear all errors
        Object.keys(data).forEach((key) => {
          const inputElement = formElement.elements[key];

          inputElement.classList.remove('is-danger');
          inputElement.closest('.field')?.querySelector('.help')?.remove();
        });
      }

      this.onAdd({ ...data, id: generateId() });
      formElement.reset();
    });
  },
  render() {
    const formElement = document.createElement('form');
    this.initialize(formElement);

    formElement.innerHTML = `
      <h1 class="title">Create new todo</h1>
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" name="title" placeholder="Title">
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <input class="input" type="text" name="description" placeholder="Enter description here">
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Create todo</button>
        </div>
      </div>
    `;

    return formElement;
  },
};
