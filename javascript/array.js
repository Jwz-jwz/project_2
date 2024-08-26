// // array-ni ardaa dorvoljin haalt avch bichdeg
// //array-ni dotroo buh torliin data type-g avch boldog ex: number string null unfefined object etc

// // object zarlaad array-d oruulah jishee:

// const person = {
//   name: "Duluu",
//   age: "10",
//   Nichkname: "Dul",
// };

// const array = [person, "Dulll", 10];

// // array-g buheld ni duudaj ajilluulahdaa:

// console.log(array);

// //array-ni elementee 0-s ehelj dugaarladag
// //array-n ali neg elementiig duudaj ajilluulahdaa array-n araas dorvoljin halatan dodotr dugaariig ni bichne

// console.log(array[1]);

// //hervee array dotorj object-n ali neg elementiig duudah gj bgaa bol
// console.log(array[0].Nichkname);

// console.log(array[2]);

const person = {
  classinfo: {
    classNumber: 401,
    teacherName: ["Bolroo", "Duluu", "Dashka"],
    imacNumber: "1c",
  },
  name: "Jwz",
};

console.log(
  "TeacherName:=> ",
  person.classinfo.teacherName[0],
  person.classinfo.teacherName[1],
  person.classinfo.teacherName[2]
);
console.log("Minii ner:", person.name);
console.log("Angiin digaar:", person.classinfo.classNumber);
console.log("Imac dugaar:", person.classinfo.imacNumber);

// Array -n 2dah elementiig hevelne uu
// const array4 = [10, 20, 30, 40, 50];
const array4 = [10, 20, 30, 40, 50];
console.log("array-n 2 dahi elementiig hevleh", array4[1]);

// object dotor baigaa array-g hevelne uu
// const person3 = { name: 'Alice', friends: ['Bob', 'Charlie'] };
const person3 = { name: "Alice", friends: ["Bob", "Charlie"] };
console.log(
  "object dotorh array-g hevleh:",
  person3.friends[0],
  person3.friends[1]
);

// New York iig songoj hevlene uu
// const person2 = { name: 'Alice', address: { city: 'New York', zip: 10001 } };
const person2 = { name: "Alice", address: { city: "New York", zip: 10001 } };
console.log("Newyork-g songoj hevleh:", person2.address.city);

// 2D array -s 6 toog songoj hevelne uu
//const array2D = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(array2D[1][2]);
