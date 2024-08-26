// 2.Check age for driving.
// Өгөгдсөн насыг шалгаад 18-аас дээш бол "You are old enough to drive", 18-аас доош бол 18 хүрэхэд дутуу байгаа жилтэй нь хамт "You are left with 3 years to drive" гэж хэвлэнэ үү .
let age = 11;
if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log("you are left with ", 18 - age, " years to drive");
  console.log("you are left with " + (18 - age) + " years to drive");
  console.log(`you are left with ${18 - age} years to drive`);
}

// 3.Check if the given number is odd or even .
// Өгөгдсөн тоог шалгаад тэгш тоо бол "even" , сондгой тоо бол "odd" гэж хэвлэнэ үү .
let num = 9;
if (num % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

// 4.Check if a given number is divisible by 5 .
// Өгөгдсөн тоо нь 5-д хуваагддаг үгүйг шалгана уу.
num = 8;
if (num % 5 !== 0) {
  console.log("undivisible");
} else {
  console.log("divisible");
}
// 5.Check if a given number is within the range of 1 to 100 .
// Өгөгдсөн тоо 1-ээс 100-н хооронд байвал "include" , байхгүй бол "exclude" гэж хэвлэнэ үү .
num = -10;
if (1 <= num) {
  if (num <= 100) {
    console.log("include");
  } else {
    console.log("exclude");
  }
} else {
  console.log("surug too");
}
// if (1 < num && num < 100) {
//   console.log("include");
// } else {
//   console.log("exclude");
// }
// 6.Check if a password is strong (strong password is at least 8 characters long) .
// Нууц үгийг хүчтэй үгүйг шалгаад хүчтэй бол "strong", сул бол "weak" гэж хэвлэнэ үү. Багадаа 8 тэмдэгт агуулвал хүчтэй гэж тооцно .
////////////////
// let password = prompt("passwordoo bichne uu");
let password = "dsfdgfdgf";
let size = password.length;
if (size > 8) {
  console.log("strong");
} else {
  console.log("weak");
}

// 7.Categorize age group (children, youth, adults, seniors) .
// Өгөгдсөн нас нь 14-өөс доош бол "Children", 14-24 бол "Youth", 24-64 бол "Adults", 64-өөс дээш бол "Seniors" гэж хэвлэнэ үү .
//////////////////
// let nas=prompt("nasaa oruulna uu")
let nas = 63;
if (nas < 14) {
  console.log("Children");
} else if (nas >= 14 && nas < 24) {
  console.log("youth");
} else if (nas >= 24 && nas < 64) {
  console.log("Adults");
}

// 8.Check triangle validity .
// Өгөгдсөн гурвалжны гурван талыг зөв эсэхийг шалгана уу .
// Жишээ нь:
//      a=5 b=6 c=7 / is valid
//      a=4 b=8 c=19 / is invalid
// let a_tal = prompt("a taliin utgiig oruulna uu");
// let b_tal = prompt("b taliin utgiig oruulna uu");
// let c_tal = prompt("c taliin utgiig oruulna uu");
let a_tal = 4;
let b_tal = 8;
let c_tal = 19;
if (a_tal + b_tal > c_tal && a_tal + c_tal > b_tal && b_tal + c_tal > a_tal) {
  console.log("valid");
} else {
  console.log("invalid");
}
// 9.Find the largest of two number .
// 2 тооноос ихийг нь олж хэвлэнэ үү .
let a = 23;
let b = 28;
if (a > b) {
  console.log(a);
} else {
  console.log(b);
}
// 10.Check if a given character is a vowel or a consonant .
// Өгөгдсөн үсгийг шалгаад эгшиг бол "vowel" , гийгүүлэгч бол "consonant" гэж хэвлэнэ үү .
// let vowel=prompt("usgee bichij oruulna uu")
let vowela = "E";
vowel = vowela.toLowerCase();
if (
  vowel == "a" ||
  vowel == "i" ||
  vowel == "o" ||
  vowel == "u" ||
  vowel == "e"
) {
  console.log("vowel");
} else {
  console.log("consonant");
}

// 11.Check if year is an Olympic year.
// Өгөгдсөн жил нь Олимпийн жил мөн бишийг шалгаад хэвлэнэ үү .
// let olympic_year = prompt("jilee oruulna uu");
let olympic_year = 2025;
if (olympic_year % 4 == 0) {
  console.log("olympic year");
} else {
  console.log("not");
}

// 12.Амралтын өдөр эсвэл ажлын өдөр эсэхийг шалгаарай.
// Өгөгдсөн өдөр ажлын өдөр бол "work day" , амралтын өдөр бол "weekend" гэж хэвлэнэ үү .
// for example :
//      day = Thursday / work day
//      day = Saturday / weekend
// let day = prompt("odroo oruulna uu");
let day = "sat";
if (
  day == "mon" ||
  day == "tue" ||
  day == "wed" ||
  day == "thu" ||
  day == "fri"
) {
  console.log("workday");
} else {
  console.log("weekend");
}

// 13.Check if the given number is a prime number or not .
// Өгөгдсөн тоог анхны тоо мөн бишийг шалгана уу . (1 болон өөртөө хуваагддаг тоог анхны тоо гэнэ)
// example :
// number = 2 // true
// number = 15 // false

// 14.Өгөгдсөн сурагчийн дүнг A , B , C , D , F бүлэгт ангилж хэвлэнэ үү .
//    80-100, A
//    70-89, B
//    60-69, C
//    50-59, D
//    0-49, F
// let dun = prompt("dung oruulna uu");
let dun = 10;
if (dun >= 0 && dun <= 49) {
  console.log("F");
} else if (dun >= 50 && dun <= 59) {
  console.log("D");
} else if (dun >= 60 && dun <= 69) {
  console.log("C");
} else if (dun >= 70 && dun <= 89) {
  console.log("B");
} else if (dun >= 90 && dun <= 100) {
  console.log("A");
}
//hard
// 15.Check if the season is Autumn, Winter, Spring or Summer.
// Өгөгдсөн сарыг шалгаад тохирох улирлыг хэвлэнэ үү .
// for example : month = November / Autumn
// let month = prompt("sariig oruulna uu");
let month = "feb";
if (month == "jan" || month == "feb" || month == "mar") {
  console.log("winter");
} else if (month == "apr" || month == "may" || month == "june") {
  console.log("spring");
} else if (month == "july" || month == "aug" || month == "sep") {
  console.log("summer");
} else if (month == "oct" || month == "nov" || month == "dec") {
  console.log("autumn");
}

// 16.Яг одоогийн цагийг шалган өглөө бол "Good morning", өдөр бол "Good afternoon", орой бол "Good evening" гэж хэвлэнэ үү .
// let time = prompt("odoogiin tsagaa oruulna uu");
let time = 13;
if (time <= 0 && time <= 8) {
  console.log("Good morning");
} else if (time <= 9 && time <= 17) {
  console.log("Good afternoon");
} else if (time <= 18 && time <= 24) {
  console.log("Good afternoon");
}

// 17.Цаг агаар температур , "sunny" эсвэл "rainy" гэж өгөгдөх ба бороотой бол "Don't forget your umbrella!" , нартай бол температур нь 30-аас их бол "It's a hot day!" , 20-30 градус бол "It's a warm day" , 20-оос бага бол "It's a bit cool today" гэж хэвлэнэ үү .
// for example : weather = "sunny" temperature = 25 / It's a warm day.

// let weather = prompt("just sunny or rainy oruulna uu");
// let temperature = prompt("temperaturiig oruulna uu");

let weather = "rainy";
let temperature = 20;
if ((weather = "sunny")) {
  if (temperature >= 30) {
    console.log("It's a hot day");
  } else if (temperature >= 20 && temperature < 30) {
    console.log("It's a warm day");
  } else if (temperature < 20) {
    console.log("It's a bit cool today");
  }
} else {
  console.log("Don't forget your umbrella");
}
