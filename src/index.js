module.exports = function zeros(expression) {
  let arrSingle = [];
  let arrDouble = [];
  let zeroCounter = 0;
  let flag = 0;

  expression.split('*').map(el => {
    if (el.includes('!!')) {
      arrDouble.push(el.slice(0, -2));
    } else {
      arrSingle.push(el.slice(0, -1));
    }
  });

  arrSingle.map(number => {
    zeroCounter += Math.floor(number / 5) + Math.floor(number / 25);
    flag += 1;
  });

  arrDouble.map(number => {
    if (number % 2 === 0) {
      flag += 1;
    }
    for (let i = number; i > 0; i -= 2) {
      if (i % 5 === 0) {
        zeroCounter += 1;
        if (i % 25 === 0) {
          zeroCounter += 1;
        }
      }
    }
  });
  if (flag === 0) return 0;
  return zeroCounter;
};
