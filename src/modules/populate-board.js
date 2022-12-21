import GET_SCORE from './get.js';

const boardContainer = document.querySelector('.score-container');

const POPULATE_BOARD = async () => {
  boardContainer.innerHTML = '';
  const scoreArr = await GET_SCORE();
  scoreArr.sort((a, b) => b.score - a.score);
  scoreArr.forEach((element) => {
    boardContainer.innerHTML += `
    <li>
      <p class="name">${element.user} </p>
      <p class="score">${element.score}</p>
    </li>
    `;
  });
};

export default POPULATE_BOARD;