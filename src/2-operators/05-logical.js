const a = true;
const b = false;
const c = true;

if (a && b) {
  console.log(`a && b: ${a && b}`);
}

if (a && c) {
  console.log(`a && c: ${a && c}`);
}

if (a || b) {
  console.log(`a || b: ${a || b}`);
}

if (a || c) {
  console.log(`a || c: ${a || c}`);
}

console.log('');

console.log(`true && false: ${true && false}`);
console.log(`1 && 0: ${1 && 0}`);
console.log(`1 && 2 && 0: ${1 && 2 && 0}`);
console.log(`1 && 0 && 2: ${1 && 0 && 2}`);
console.log(`0 && 1 && 2: ${0 && 1 && 2}`);
console.log(`'a' && 'b' && '': ${'a' && 'b' && ''}`);
console.log(`'a' && 'b' && 'c': ${'a' && 'b' && 'c'}`);

console.log('');

console.log(`false || true: ${false || true}`);
console.log(`0 || 1: ${0 || 1}`);
console.log(false || 0 || {});
console.log(false || [] || null);
console.log(`function () {} || undefined || '': ${function () {} || undefined || ''}`);
console.log(`false || 0 || NaN: ${false || 0 || NaN}`);
