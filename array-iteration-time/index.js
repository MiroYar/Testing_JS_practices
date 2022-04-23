const length = 10000;
const array = [];
for (let i = 0; i < length; i++) {
  array.push(i);
}

const iterationDo = (i, name) => {
  const el = array[i];
  if (i === length - 1) console.log(`Iterate by "${name}" method is done on ${el}`);
};

console.time('for');
for (let i = 0; i < length; i++) {
  iterationDo(i, 'for');
}
console.timeEnd('for');

console.time('while');
let i = 0;
while (i < length) {
  iterationDo(i, 'while');
  i++;
}
console.timeEnd('while');

console.time('reduce');
array.reduce((result, el, i) => {
  iterationDo(i, 'reduce');
  return result;
}, []);
console.timeEnd('reduce');
