import { formatDate } from '../utils/dateUitls.js';

export default class View {
  static render(todoListEl, todos) {
    const htmlString = todos.map(
      (todo) => `
              <li class="todo ${todo.done ? 'done' : ''}" data-id="${todo.id}">
                  <button type="button" class="icon-button todo__status-button" data-type="toggle">
                    <img src="./assets/${
                      todo.done ? 'done.svg' : 'todo.svg'
                    }" alt="todo-status-button" />
                  </button>
                  <p class="todo__content">${todo.content}</p>
                  <button type="button" class="icon-button todo__delete-button" data-type="delete">
                    <img src="./assets/delete.svg" alt="todo-delete-button" />
                  </button>
              </li>
              `
    );

    todoListEl.innerHTML = htmlString.join('');
  }

  static renderDate() {
    const formattedDateString = formatDate();

    document.querySelector('.date-wrapper__full-date').textContent =
      formattedDateString;
  }
}
