// /////***********2 array-g niiluuleh */
// console.log("2 array-g merge hiih");
// const arr1 = [1, 2, 3, 4];
// const arr2 = [4, 5, 6, 3];
// // const arr3 = arr1.concat(arr2);
// // console.log(arr3);
// const arr3 = [];
// arr3.length = arr1.length + arr2.length;
// // console.log(arr3.length);

// // for (let i = 0; i < arr3.length; i++) {
// //   if (i < arr1.length) {
// //     arr3[i] = arr1[i];
// //   } else if (i >= arr1.length && i < arr3.length) {
// //     arr3[i] = arr2[i - arr2.length];
// //   }
// // }
// for (let i = 0; i < arr3.length; i++) {
//   arr3[i] = arr1[i];
//   if (i > arr1.length - 1) {
//     arr3[i] = arr2[i - arr1.length];
//   }
// }
// console.log("arr3", arr3);

/////***********array-s element hasah */
// console.log("array-s element hasah");
// const arr = [10, 20, 30, 40, 50];
// const arr1 = [];
// let x = 30;
// for (let i = 0; i < arr.length; i++) {
//   if (i < arr.length - 1) {
//     arr1[i] = arr[i];
//   } else {
//     arr1[i] = x;
//   }
// }
// console.log(arr1);

///////////////////////29th july
///// hamgiin ariin elemnt nemeh push array///
function pusharray(array, element) {
  const newarray = array;
  newarray[newarray.length] = element;
  return newarray;
}

// console.log(pusharray([1, 2, 3], 6));

// // /////hamgiin ariin elementiig hasah pop array
// // function poparray(array) {
// //   array.length = array.length - 1;
// //   return array;
// // }
// // console.log(poparray([1, 2, 3, 4]));

// ////// array-n hamgiin ehnii elementiig hasdag shift array

// function arrayshift(array) {
//   for (i = 0; i < array.length; i++) {
//     array[i] = array[i + 1];
//   }
//   array.length = array.length - 1;
//   return array;
// }
// console.log(arrayshift([1, 2, 3, 4]));

// ////// array-n hamgiin ehnii elementiig nemdeg unshift array

// function unshiftarray(array, element) {
//   let newarray = [];
//   newarray[0] = element;
//   for (let i = 0; i < array.length; i++) {
//     newarray[i + 1] = array[i];
//   }
//   return newarray;
// }
// console.log(unshiftarray([3, 2, 3], 7));

// function multiple(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = 2 * array[i];
//   }
//   return array;
// }
// console.log(multiple([5, 6, 3]));

// function minus(array) {
//   let newarray = [];
//   let j = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 3) {
//       newarray[j] = array[i];
//       j++;
//     }
//   }
//   newarray.length = j;
//   return newarray;
// }
// console.log(minus([2, 1, 4, 5]));

//////omnoh bodlogiin  oor arga
function minus(array) {
  let newarray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] > 3) {
      pusharray(newarray, array[i]);
    }
  }
  return newarray;
}
console.log(minus([20, 1, 4, 5]));
