////////////////////

//array-g string bolgodog method: arr.string
//array-g zalgadag method(hoorondoo yutai hamt zalgahaa bas zadag):array.join
// pop-suuliin elementiig hasdag method
// push-suuliin element nemdeg method
// shift-ehnii elementiig hasdag method
// unshift-ehnii element nemdeg method

// Exercise 1: ogogdson array-n suuliin 3 elementiig hasah
// let num = 3;
// let array = [3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < num; i++) {
//   array.pop();
// }
// console.log(array);

// Exercise 2: ogogdson array-n urd 3 element nemeh
// let num = 3;
// let array = [3, 4, 5, 6, 7, 8, 9];
// array.unshift(1, 2, 1);
// console.log(array);

// Exercise 3: input :[1,2,3,4,5],2
//             output :[4,5,1,2,3]

let array = [1, 2, 3, 4, 5]; // 5        2
let num = 2;
for (let i = 0; i < num; i++) {
  let x = array.length - 1;
  let element = array[x];
  array.pop();
  array.unshift(element);
}
console.log(array);

//4. Exersice- ijilhen elementuudiig hasah
// const array_1 = [1, 1, 1, 2, 2, 3];

// const new_array = array_1.filter(function (Just) {
//   for (let i = 0; i < array_1.length; i++) {
//     if (array_1[i] == array_1[i + 1]) {
//       array_1.shift();
//     } else {
//     }
//   }
//   return Just;
// });
// console.log(new_array);

// const new_array = array_1.filter(Just);
// function Just() {
//   for (i = 0; i < array_1.length; i++) {
//     if (array_1[i] == array_1[i + 1]) {
//       array_1.shift();
//     }
//   }
//   return Just;
// }
// console.log(new_array);
