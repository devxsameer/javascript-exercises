const fibonacci = function (mynum) {
  num = +mynum;
  if (num === 0) {
    return 0;
  } else if (num < 0) {
    return "OOPS";
  }
  let fibSeries = [1, 1];
  for (let i = 2; i <= num; i++) {
    pushNum = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
    fibSeries.push(pushNum);
  }
  return fibSeries[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
