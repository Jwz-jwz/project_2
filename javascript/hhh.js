//target=9

const arr = [2, 7, 11, 15];
const target = 9;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] == target) {
//       console.log(arr[i], arr[j], i, j);
//     }
//   }
// }

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = arr[i] + arr[i + 1];
  
}
