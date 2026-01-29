// 날짜 포맷팅
const today = new Date();

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const formattedDate = today.toLocaleDateString('en-US', options);
document.querySelector('.date-wrapper__full-date').textContent = formattedDate;

// 투두 렌더링
let todos = [
  { id: 1, content: '코멘토 2주차 과제 수행', done: false },
  { id: 2, content: '프로젝트 코드 리뷰', done: true },
];

const todoListEl = document.querySelector('.todo-list');

const render = () => {
  const htmlString = todos.map(
    (todo) => `
        <li class="todo ${todo.done ? 'done' : ''}" data-id="${todo.id}">
            <button type="button" class="icon-button todo__status-button">
              <img src="./assets/${
                todo.done ? 'done.svg' : 'todo.svg'
              }" alt="todo-status-button" />
            </button>
            <p class="todo__content">${todo.content}</p>
            <button type="button" class="icon-button todo__delete-button">
              <img src="./assets/delete.svg" alt="todo-delete-button" />
            </button>
        </li>
        `
  );

  todoListEl.innerHTML = htmlString.join('');
};
render();
