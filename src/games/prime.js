import { cons } from '@hexlet/pairs';
import { getRandomNum, game } from '..';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const gameRealisation = () => {
  const question = getRandomNum(0, 50);

  const expectedAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, expectedAnswer);
};

export default () => game(gameRealisation, gameDescription);
