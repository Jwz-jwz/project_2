let array = [1, 2, 3, 4, 5]; // 5        2
let num = 2;
let array_new = [];
for (let i = 1; i <= num; i++) {
  array_new[num - i] = array.pop();
}
// console.log(array);
// console.log(array_new);
array.unshift(array_new);
console.log(array);