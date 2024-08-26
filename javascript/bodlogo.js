// // ////// sum positive even number-g ol
// // console.log("***1*******************************");
// // const array = [2, -3, 5, 6, -8, 10];
// // let sum = 0;
// // for (let i = 0; i < array.length; i++) {
// //   if (array[i] > 0 && array[i] % 2 == 0) {
// //     sum += array[i];
// //   }
// // }
// // console.log(sum);

// // //////////////Second largest utgiig oloh
// // console.log("***2******************************");
// // const second = [200, 100, 10, 10];
// // let max = 0;
// // let secondlargest = 0;
// // for (let i = 0; i < second.length; i++) {
// //   if (second[i] > max) {
// //     max = second[i];
// //     for (let j = 0; j < second.length; j++) {
// //       if (second[j] < max && secondlargest < second[j]) {
// //         secondlargest = second[j];
// //       }
// //     }
// //   }
// // }
// // console.log("Max utga", max);
// // console.log("Second largest", secondlargest);

// // //////////////ogogdson toonuudiin niilberiin dundajiig oloh
// // console.log("***3*******************************");
// // const avarage = [10, 20, 30, 40, 50];
// // let sum_1 = 0;
// // for (let i = 0; i < avarage.length; i++) {
// //   sum_1 += avarage[i];
// // }
// // console.log("total sum", sum_1);
// // console.log("avarage", sum_1 / avarage.length);

// // //////////////Fibonacci sequence-n ehnii 100 toog gargah
// // console.log("***4*******************************");
// // let seq = [0, 1];
// // // seq.length = 100;
// // // seq[0] = 0;
// // // seq[1] = 1;
// // for (let i = 2; i < 100; i++) {
// //   seq[i] = seq[i - 2] + seq[i - 1];
// // }
// // console.log(seq);

// //////////////max, min-g oloh
// console.log("***5*******************************");
// // let maxmin = [89, 3, 5, 22, 0, 46, 17, 31];
// // let max_u = 0;
// // let min_u = maxmin[0];
// // for (i = 0; i < maxmin.length; i++) {
// //   if (maxmin[i] > max_u) {
// //     max_u = maxmin[i];
// //   }
// //   if (maxmin[i] < min_u) {
// //     min_u = maxmin[i];
// //   }
// // }
// // console.log("max-utga", max_u);
// // console.log("min-utga", min_u);
// let maxmin = [89, 3, 5, 22, 2, 46, 17, 31];
// let max_u = 0;
// let min_u = 0;
// // for (i = 0; i < maxmin.length; i++) {
// //   if (maxmin[i] > max_u) {
// //     max_u = maxmin[i];
// //   }
// //     if (maxmin[i] < min_u) {
// //       min_u = maxmin[i];
// //     }
// // }

// for (i = 0; i < maxmin.length; i++) {
//   if (maxmin[i] < maxmin[i + 1]) {
//     min_u = maxmin[i];
//   }
//   for (let j = 1; j < maxmin.length; j++) {
//     if (min_u > maxmin[j]) {
//       min_u = maxmin[j];
//     }
//   }
// }

// console.log(min_u);

// // console.log("max-utga", max_u);
// // console.log("min-utga", min_u);

// //////////////too ogogdood 1-s ehleed ter too hurtelh toonii niiilberiig oloh
// console.log("***6*******************************");

// let number = 20;
// let summ = 0;

// for (let i = 1; i <= number; i++) {
//   summ = summ + i;
// }
// console.log(summ);

// //////////////too ogogdood ter toonii heden zereg ni 1000-s ih baih ve gedeg zergiig olno
// console.log("***7*******************************");
// let num1 = 2;
// let result = 0;
// for (let i = 0; i < Infinity; i++) {
//   result = num1 ** i;
//   if (result >= 1000) {
//     console.log(i);
//     break;
//   }
// }
// //////////////ogogdson array-n elementiig bagaas ni ih ruu bichih
console.log("***8*******************************");
let arr = [2, 6, 9, 1, 8];
// for (i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }
let x = 0;
for (let i = 1; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    debugger;
    if (arr[i] < arr[j]) {
      let x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
  }
}
console.log(arr);
// let reversedarray = [];
// let index = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   reversedarray[index] = arr[i];
//   index++;
// }
// console.log(reversedarray);
