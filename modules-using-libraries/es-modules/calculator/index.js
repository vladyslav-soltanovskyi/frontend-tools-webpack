export const sum = (a, b) => {
  console.log('implementation for sum');
  return a + b;
};

export const mult = (a, b) => {
  console.log('implementation for mult');
  return a * b;
};

const calc = expression => {
  console.log('implementation for calc');
  if (typeof expression !== 'string') {
    return null;
  }

  const [a, operation, b] = expression.split(' ');
  let result;

  switch (operation) {
    case '+':
      result = +a + +b;
      break;
    case '-':
      result = +a - +b;
      break;
    case '*':
      result = +a * +b;
      break;
    case '/':
      result = +a / +b;
      break;
  }

  return result;
};

export default calc;