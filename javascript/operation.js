// 1. 4 нь 3-аас их үү ?
let x = 4;
console.log(x > 3);
console.log(typeof x);
// 2. 3 нь 4-өөс их үү ?
console.log(3 > 4);
// 3. 4 нь 3-аас их буюу тэнцүү юу ?
console.log(4 >= 3);
// 4. 3 нь 4-өөс их буюу тэнцүү юу ?
console.log(3 >= 4);
// 5. 4 нь 4-тэй тэнцүү юу ?
console.log(4 == 4);
// 6. 4 нь 4-тэй яг тэнцүү юу ?
console.log(4 === 4);
// 7. 4 нь 4-тэй тэнцүү биш нь үнэн үү ?
console.log(4 != 4);
// 8. 4 нь "4"-тэй тэнцүү биш нь үнэн үү ?
console.log("4" != 4);
// 9. 4 нь "4"-тэй яг тэнцүү юу ?
console.log(4 === "4");
// 10. 4 нь "4"-тэй тэнцүү юу ?
console.log(4 == "4");
// 11. 4 нь 3-аас их болон 10 нь 12-оос бага нь үнэн үү ?
console.log(4 > 3 && 10 < 12);
// console.log(10 < 12);
// console.log(4 > 3);
// 12. 4 нь 3-аас их болон 10 нь 12-оос их нь үнэн үү ?
console.log(4 > 3 && 10 > 12);
// console.log(4 > 3);
// console.log(10 > 12);
// 13. 4 нь 3-аас их эсвэл 10 нь 12-оос бага нь үнэн үү ?
console.log(4 > 3 || 10 < 12);
// 14. 4 нь 3-аас их эсвэл 10 нь 12-оос их нь үнэн үү ?
console.log(4 > 3 || 10 > 12);
// 15. 4 нь 3-аас бага эсвэл 10 нь 12-оос их нь үнэн үү ?
console.log(4 < 3 || 10 > 12);
// 16. let five = !(4 > 3) ямар хариу буцаах вэ ?
let five = !(4 > 3);
console.log(five);
// 17. let six = !(4 < 3) ямар хариу буцаах вэ ?
let six = !(4 < 3);
console.log(six);
// 18. let seven = !(4 > 3 && 10 < 12) ямар хариу буцаах вэ ?
let seven = !(4 > 3 && 10 < 12);
console.log(seven);
// 19. let eight = !(4 > 3 && 10 > 12) ямар хариу буцаах вэ ?
let eight = !(4 > 3 && 10 > 12);
console.log(eight);
// 20. let nine = !(4 === "4") ямар хариу буцаах вэ ?
let nine = !(4 === "4");
console.log(nine);
// 21. 936-г 12д хуваагаад гарсан хариуг 9д хуваахад гарах үлдэгдлийг хэвлэнэ үү .
console.log((936 / 12) % 9);

// const boolean = true; // boolean
// const obj = { name: "1" }; //obj
// const array = [1]; //array
// const string = "hello"; //string
// const number = 1; //number
// const null_1 = null;
// const undefined = undefined;
// console.log(typeof string);

weather = "raining";
if ((weather = "raining")) {
  console.log("home");
} else {
  console.log("go outs");
}
