import GET_SCORE from './get.js';

const boardContainer = document.querySelector('.score-container');

const POPULATE_BOARD = async () => {
  boardContainer.innerHTML = '';
  const scoreArr = await GET_SCORE();
  scoreArr.sort((a, b) => b.score - a.score);
  let index = 1;
  scoreArr.forEach((element) => {
    boardContainer.innerHTML += `
    <li>
      <p class="name">${index}. ${element.user} </p>
      <p class="score">${element.score}</p>
    </li>
    `;
    index +=1;
  });
};

export default POPULATE_BOARD;