// IIFE: Immediately Invoked Function Expression

const a = 4;

const func1 = () => {
  console.log(`a * 2: ${a * 2}`);
};

func1();

console.log('');

(() => {
  console.log(`a * 3: ${a * 3}`);
})();

console.log('');

((w, d) => {
  console.log(w.innerWidth);
  console.log(d.body);
})(window, document);
