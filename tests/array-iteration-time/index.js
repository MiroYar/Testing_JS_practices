const length = 10000;
const array = [];
for (let i = 0; i < length; i++) {
  array.push(i);
}
// Далее повторяющийся код исполнения для каждого метода на итерацию не завернут в общую функцию
// т.к. такая функция увеличивает время исполнения метода, что было проверено опытным путем.
// Пример функции:
// const lengthCondition = (i, name, el) => {
//   if (i === length - 1) console.log(`${name}: Iterate is done on ${el}`);
// };
// const iterationDo = (i, name) => {
//   const el = array[i];
//   lengthCondition(i, name, el);
// };

console.time('for');
for (let i = 0; i < length; i++) {
  const el = array[i];
  if (i === length - 1) console.log(`for: Iterate is done on ${el}`);
}
console.timeEnd('for');

console.time('while');
let i = 0;
while (i < length) {
  const el = array[i];
  if (i === length - 1) console.log(`while: Iterate is done on ${el}`);
  i++;
}
console.timeEnd('while');

console.time('reduce');
array.reduce((result, el, i) => {
  array[i];
  if (i === length - 1) console.log(`reduce: Iterate is done on ${el}`);
  return result;
}, []);
console.timeEnd('reduce');

console.time('reduce without get arr el');
array.reduce((result, el, i) => {
  if (i === length - 1) console.log(`reduce without get arr el: Iterate is done on ${el}`);
  return result;
}, []);
console.timeEnd('reduce without get arr el');
