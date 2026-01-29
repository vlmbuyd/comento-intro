// 날짜 포맷팅
const today = new Date();

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const formattedDate = today.toLocaleDateString('en-US', options);
document.querySelector('.date-wrapper__full-date').textContent = formattedDate;
