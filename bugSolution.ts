function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result:number = add(5, 3); // result will be 8
result = subtract(result, 2); // result will be 6

console.log(result); // output: 6