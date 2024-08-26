// const number1 = prompt("too 1 oruulna uu"); //string
// const number2 = prompt("too 2 oruulna uu"); //string

// const sum = Number(number1) + Number(number2); //stringiig too bolgoj bgaa
// console.log(sum);
// console.log(typeof sum);

// if (sum) {
//   if (sum <= 10) {
//     console.log("10-s ih too");
//   } else if (sum > 5) {
//     console.log("5-s ih too");
//   }
// } else {
//   console.log("ene too bish");
// }

function helloPrint(name, age) {
  console.log("ner=" + name, "nas=" + age);
}

helloPrint("fdsf", 20);

function Sum(num1, num2) {
  console.log(num1 + num2);
}

Sum(4, 6);

// 1. Check if Zero: Write a function isZero that takes a number and returns true if the number is zero, and false otherwise.
// 1.  0 - тэй тэнцүү бол true, үгүй бол false гэж хэвэлдэг isZero гэдэг функц бичнэ үү.

function isZero(utga) {
  if (utga == 0) {
    console.log("true");
  } else {
    console.log("false");
  }

}

isZero(33);

// 2. Square a Number: Write a function square that takes a number and returns its square.
// 2. Тооны квадрат: Тоо өгч квадратыг нь буцаадаг square гэдэг функц бичнэ үү.
function square(number) {
  return number * number;
}
let kvad = square(5);
console.log(kvad);

// 3. Calculate the Area of a Rectangle: Write a function rectangleArea that takes the width and height of a rectangle and returns its area.
// 3. Тэгш өнцөгтийн талбайг тооцоолох: Тэгш өнцөгтийн өргөн ба өндрийг өгч талбайг нь буцаадаг rectangleArea гэдэг функц бичнэ үү.
function rectangleArea(x, y) {
  return x * y;
}
let talbai = rectangleArea(5, 9);
console.log(talbai);

// 4. Find the Largest Number: Write a function findLargest that takes three numbers as arguments and returns the largest number.
// 4. Хамгийн их тоог ол: Гурван тоо өгч хамгийн их тоог буцаадаг findLarge гэдэг функц бичнэ үү.
function findLarge(x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else if (z > x && z > y) {
    return z;
  }
}
let find = findLarge(5, 12, 8);
console.log(find);

// 5. Convert Temperature: Write a function celsiusToFahrenheit that takes a temperature in Celsius and returns the temperature in Fahrenheit
// 5. Температур хөрвүүлэх: Цельсийн температур өгч Фаренгейтийн температурыг буцаадаг celsiusToFahrenheit гэдэг функц бичнэ үү.
function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}
let f = celsiusToFahrenheit(31);
console.log(f);
// 6. Simple Calculator: Write a function calculator that takes three arguments: two numbers and a string representing an operation ('add', 'subtract', 'multiply', 'divide'). The function should perform the corresponding operation and return the result.
// 6. Энгийн тооны машин: Хоёр тоо болон ямар үйлдэл хийх утга ('add', 'subtract', 'multiply', 'divide') гэсэн гурван аргумент авах функц бичнэ үү. Энэ Функц нь харгалзах үйлдлийг гүйцэтгэж, үр дүнг буцаадаг байна.
function calculator(num1, num2, what) {
  if (what == "add") {
    return num1 + num2;
  } else if (what == "sub") {
    return num1 - num2;
  } else if (what == "mul") {
    return num1 * num2;
  } else if (what == "div") {
    return num1 / num2;
  }
}

let khariu = calculator(10, 5, "div");
console.log(khariu);
