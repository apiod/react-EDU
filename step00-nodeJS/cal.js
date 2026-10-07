const add = function (a, b) {
  return a + b;
};
const minus = function (a, b) {
  return a - b;
};

//commonJS방식
// module.exports = {
//   add: add,
//   minus,
// };

// ES JS방식 - 외부에서 함수를 사용
export { add, minus };
