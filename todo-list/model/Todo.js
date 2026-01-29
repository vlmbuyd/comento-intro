export default class Todo {
  constructor(todos, btnEl, actionType) {
    this.todos = todos;
    this.btnEl = btnEl;
    this.actionType = actionType;
    this.actions = {
      toggle: (id) => this.toggle(id),
      delete: (id) => this.delete(id),
    };

    this.action();
  }

  action() {
    const id = this.getTodoId(this.btnEl);
    this.actions[this.actionType](id);
  }

  toggle(id) {
    const clickedTodo = this.todos.find((todo) => todo.id === Number(id));
    clickedTodo.done = !clickedTodo.done;
  }

  delete(id) {
    const idx = this.todos.findIndex((todo) => todo.id === Number(id));
    this.todos.splice(idx, 1);
  }

  getTodoId(btnEl) {
    const li = btnEl.closest('li');
    return li.dataset.id;
  }
}
