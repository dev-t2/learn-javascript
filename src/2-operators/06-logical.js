const a = true;
const b = false;
const c = true;

if (a && b) {
  console.log('a && b');
}

if (a && c) {
  console.log('a && c');
}

if (a || b) {
  console.log('a || b');
}

if (a || c) {
  console.log('a || c');
}

console.log(true && false);
console.log(1 && 0);
console.log(1 && 2 && 0);
console.log(1 && 0 && 2);
console.log(0 && 1 && 2);
console.log('a' && 'b' && '');
console.log('a' && 'b' && 'c');

console.log(false || true);
console.log(0 || 1);
console.log(false || 0 || {});
console.log(false || [] || null);
console.log(function () {} || undefined || '');
console.log(false || 0 || NaN);
