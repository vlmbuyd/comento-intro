import Controller from './controller/Controller.js';
import View from './view/View.js';

// 날짜 포맷팅 및 렌더링
View.renderDate();

// 투두 렌더링
let todos = [
  { id: 1, content: '코멘토 2주차 과제 수행', done: false },
  { id: 2, content: '프로젝트 코드 리뷰', done: true },
];

new Controller(todos);
