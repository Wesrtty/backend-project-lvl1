import { getRandomInt } from '../utils.js';

export const showRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const isValid = (input) => ['yes', 'no'].includes(input);

const isEven = (number) => number % 2 === 0;

export const getTask = () => getRandomInt(0, 100);

export const getCorrectAnswer = (task) => (isEven(Number(task)) ? 'yes' : 'no');
