let outer = document.getElementById("outer");
let btn = document.getElementById("butt");
let enter_task = document.getElementById("enter_task");
btn.addEventListener("click", box_s);
function box_s() {
  enter_task.style = `
  display: flex;
  flex-direction: column`;
  outer.style.opacity = 0.4;
}
// 88///////////////////////////////
let get_name = document.getElementById("taskname");
let select_status = document.getElementById("select_status");
let submit = document.getElementById("submit");
let card_one = document.getElementById("card_one");
let card_two = document.getElementById("card_two");
let card_three = document.getElementById("card_three");
let card_four = document.getElementById("card_four");
let count_num = document.getElementById("count_num");
let countNumOne = document.getElementById("countNumOne");
let countNumTwo = document.getElementById("countNumTwo");
let countNumThree = document.getElementById("countNumThree");

let array_card = [card_one, card_two, card_three, card_four];
let array_count = [count_num, countNumOne, countNumTwo, countNumThree];

let statuses = ["To do", "In progress", "Done", "Blocked"];

submit.addEventListener("click", check_status);

function check_status() {
  let todo_array = [];
  let title = get_name.value;
  let status = select_status.value;
  todo_array.push({ title, status });
  for (let i = 0; i < todo_array.length; i++) {
    for (let j = 0; j < statuses.length; j++) {
      if (todo_array[i].status == statuses[j]) {
        let createElement = document.createElement("div");
        array_card[j].appendChild(createElement);
        createElement.innerHTML = `
                <div class="gap_8 dis_flex white" id="down">
                <input class="checkbox" type="checkbox" />
                <p id="" class="todo_list">${todo_array[i].title}</p>
                <div><i  class="fa-solid fa-pen pen_icon grey" id="pen"></i></div>
                <div><i class="fa-solid fa-trash-can pen_icon red"></i></div>
                </div>
                `;
      }
    }
  }
  enter_task.style = `display: none`;
  outer.style.opacity = `1`;
}
