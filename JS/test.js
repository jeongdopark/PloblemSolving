let test = Array.from(new Array(5), (_, i) => i+1); 

let test2 = Array.from(new Set(['hello', 'hi']))

let test3 = Array.from(Array(5), () => new Array(2).fill(0))

console.log(test3);
