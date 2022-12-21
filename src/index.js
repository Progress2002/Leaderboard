// import _ from 'lodash';
import './style.css';
import POST_SCORE from './modules/post.js';
import POPULATE_BOARD from './modules/populate-board.js';

const form = document.querySelector('form');
const btnRefresh = document.getElementById('refresh');

POPULATE_BOARD();

btnRefresh.addEventListener('click', POPULATE_BOARD);

form.onsubmit = (e) => {
  e.preventDefault();
  const { name, number } = e.target;
  let nameValue = name.value;
  nameValue = nameValue.slice(0, 1).toUpperCase() + nameValue.slice(1).toLowerCase();
  POST_SCORE({
    user: nameValue,
    score: number.value,
  });
  form.reset();
};