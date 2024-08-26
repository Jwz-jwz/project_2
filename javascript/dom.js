// // DOM selector exercises
// //  Write a script to change the text content of all paragraphs to "Updated Paragraph" using a for loop.
// // <p class="text">Paragraph 1</p>

// // <p class="text">Paragraph 2</p>

// // <p class="text">Paragraph 3</p>
// const para = document.getElementsByClassName("text");

// for (i = 0; i < para.length; i++) {
//   para[i].innerText = "Updated paragraph";
// }
// // const data = [
// //   {
// //     paragraph: "Paragraph",
// //     code: 1,
// //   },
// //   {
// //     paragraph: "Paragraph",
// //     code: 2,
// //   },
// //   {
// //     paragraph: "Paragraph",
// //     code: 3,
// //   },
// // ];
// // for (i = 0; i < data.length; i++) {
// //   const text = document.createElement(`div`);
// //   document.body.appendChild(text);
// //   text.innerHTML = `
// //   <p>"${data[i].paragraph}, ${data[i].code}"</p>
// //   `;
// // }
// //       2. Write a script to add 5 list items to the unordered list using a for loop

// // <ul id="itemList"></ul>
// const unordered = document.getElementById("itemList");
// for (i = 0; i < 5; i++) {
//   const numlist = document.createElement("li");
//   unordered.appendChild(numlist);
// }

// //       3.  Write a script to change the class of each paragraph to "highlight" using a for loop.

// // <p class="text">Paragraph 1</p>

// // <p class="text">Paragraph 2</p>

// // <p class="text">Paragraph 3</p>
const neww = document.querySelectorAll("p");

for (let i = 0; i < neww.length; i++) {
  neww[i].className = "highlight";
}

//      4. Write a script to append 5 list items to the unordered list, but only append items with even numbers.

// <ul id="itemList"></ul>
const unord = document.getElementById("itemList");

for (i = 0; i < 5; i++) {
  const number = document.createElement("li");
  unord.appendChild(number);
  if (i == 0 || i % 2 == 0) {
    number.innerText = "list";
  }
}
