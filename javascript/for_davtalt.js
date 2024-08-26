// for-davtalt(for loop):
//davtalt ni array deer ihevchlen ashiglagddag, for geed bichnee () haaltan dotor davtaltiin nohtsoloo bichne(ymar uyd ene davtalt yvaad bh ve gedgee bichne)

// for (let i = 0; i <= 5; i++) {
//   debugger;
//   console.log(i);
// }

/////

const array = ["bmw", "dfdf", "dgrr", "qsl", "volvo"];
for (let i = 0; i <= array.length - 1; i++) {
  //   debugger;
  console.log(array[i]);
}
////

let sum = 0;
for (let index = 0; index <= 5; index++) {
  //   debugger;
  sum += index;
}
console.log(sum);

/////
for (let i = 1; i <= 5; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}
/////Daalgavar

////////////////
// 1. Console numbers from 1 to 10 .
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Console numbers from 10 to 1 .
// 10 -> 1 хүртэлх тоог хэвлэнэ үү
// for example :  10, 9, 8, 7, 6 ... 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 3. Sum of Numbers. Write a for loop that calculates the sum of numbers from 1 to 10.
// 1-10 хүртэлх тооний нийлбэрийг олно уу.
let sum_1 = 0;
for (let i = 1; i <= 10; i++) {
  sum_1 = sum_1 + i;
}
console.log(sum_1);

// 4. Console sum of even numbers 1 to 20 .
// 1 -> 20 хоорондох тэгш тоонуудын нийлбэрийг хэвлэнэ үү .
let sum_2 = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    sum_2 = sum_2 + i;
  }
}
console.log(sum_2);

// 5. Console a square of stars (*) .
// (*) Од ашиглан дөрвөлжинг хэвлэнэ үү .
// for example :
// *****
// *****
// *****
// *****
// let array_1 = ["*", "*", "*", "*", "*"];
// for (i = 0; i <= 3; i++) {
//   console.log(array_1[0], array_1[1], array_1[2], array_1[3], array_1[4]);
// }
let size = 5;
for (let i = 0; i < size; i++) {
  let row = "";
  for (let j = 0; j < size; j++) {
    row += "*";
  }
  console.log(row);
}

// 6.
// (*) Од ашиглан доорх дүрсийг хэвлэнэ үү .
// for example :
// *
// **
// ***
// ****
// *****
// let size_1 = 5;
// let mor = "";
// for (i = 0; i < size_1; i++) {
//   mor += "*";
//   console.log(mor);
// }
let sizeX = 5;
for (let i = 1; i <= sizeX; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// 7.Calculate given number to power .
// Өгөгдсөн тоог тухайн зэрэгт дэвшүүлнэ үү .
// input : number = 6  degree=10
// for example : 60466176
let number = 5;
let degree = 3;
for (let i = 1; i <= degree; i++) {}
console.log(number ** degree);

// 8.Calculate average of numbers from 12 to 36 .
// 12 -> 36 хүртэлх тоонуудын дунджийг ол .
// for example : 24
let sum_30 = 0;
let d = 12;
let g = 36;
for (let i = d; i <= g; i++) {
  sum_30 = sum_30 + i;
}
console.log(sum_30 / (g - d + 1));

let niilber = 0;
let count = 0;
for (let i = 12; i <= 36; i++) {
  niilber += i;
  count++;
}
console.log(niilber / count);
// 9.Sum of odd and even numbers from 11 to 50 .
// 11 -> 50 хүртэлх тоонуудын тэгш болон сондгой тоонуудын нийлбэрийг ол .
// for example : sumOdd = 600, sumEven = 620
let sumOdd = 0;
let sumEven = 0;
for (let i = 11; i <= 50; i++) {
  if (i % 2 == 1) {
    sumOdd = sumOdd + i;
  } else {
    sumEven = sumEven + i;
  }
}
console.log(sumOdd);
console.log(sumEven);

// 10.Iterate through all numbers from 1 to 45. Print the following: For multiples of 3 print “Fizz” , For multiples of 5 print “Buzz” , For multiples of 3 and 5 print “FizzBuzz”
// 1 - 45 хүртэлх тоонуудын давталт гүйлгэж 3д хуваагдаж байвал “Fizz” , 5д хуваагдаж байвал “Buzz” , 3 болон 5д хуваагдаж байвал “FizzBuzz” гэж хэвлэнэ үү .
// for example : number = 6 // Fizz , number = 8 // empty , number = 15 // FizzBuzz
for (let i = 1; i <= 45; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("number", i, "fizzbuzz");
  } else if (i % 3 == 0) {
    console.log("number", i, "fizz");
  } else if (i % 5 == 0) {
    console.log("number", i, "buzz");
  }
}

// 11.Check the fifth power of given number is greater than 10000 .
// Тооны таван зэрэг нь 10000-аас дээш эсэхийг шалгана уу .
// for example :
//      5 * 5 * 5 * 5 * 5 = 3125 // it is less than 10000
//      8 * 8 * 8 * 8 * 8 = 32768 // it is greater than 10000
let too = 8;
let too_1 = 1;
for (let i = 1; i <= 5; i++) {
  too_1 *= too;
}
console.log(too_1);

if (too_1 > 10000) {
  console.log("it is greater than 100000");
} else {
  console.log("it is less than 10000");
}

// 12. Given an array of objects representing people with their ages, write a for loop to calculate the total age.
// Өгөгдсөн утгаас насны нийлбэрийг олно уу.

// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'David', age: 40 }
//   ];
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];
let sum_4 = 0;
for (let i = 0; i < people.length; i++) {
  sum_4 = sum_4 + people[i].age;
}
console.log("Total age", sum_4);

// 13. Find Person by Name. Given an array of objects representing people, write a for loop to find a person by name.
// Хүмүүсийг төлөөлж буй объектуудын array өгөгдсөн бол хүнийг нэрээр нь олохын тулд for давталт бичнэ үү.
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'David', age: 40 }
//   ];
const Khun = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];
let Ner = "Charlie";
let y = Khun.length - 1;
for (let i = 0; i <= y; i++) {
  if (Ner == Khun[i].name) {
    console.log(Ner);
  }
}

// 14. Calculate Average Price. Given an array of objects representing items, write a for loop to calculate the average price of the items.
// дундаж үнийг тооцоолно уу.
// const items = [
//     { name: 'Book', price: 15 },
//     { name: 'Pen', price: 2 },
//     { name: 'Notebook', price: 5 },
//     { name: 'Bag', price: 30 }
//   ];

const items = [
  { name: "Book", price: 15 },
  { name: "Pen", price: 2 },
  { name: "Notebook", price: 5 },
  { name: "Bag", price: 30 },
];
let av_price = 0;
let t = items.length - 1;
for (i = 0; i <= t; i++) {
  av_price = av_price + items[i].price;
}
console.log(av_price / items.length);
