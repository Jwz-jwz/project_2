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

submit.addEventListener("click", store_inf);

let i = 0;
let a = 0;
let b = 0;
let c = 0;
function store_inf() {
  let name = get_name.value;
  let opt = select_status.value;
  if (opt == "To do") {
    let createElement = document.createElement("div");
    card_one.appendChild(createElement);
    createElement.innerHTML = `
     <div class="gap_8 dis_flex white" id="down">
            <input class="checkbox" type="checkbox" />
            <p id="" class="todo_list">${name}</p>
            <div><i  class="fa-solid fa-pen pen_icon grey" id="pen"></i></div>
            <div><i class="fa-solid fa-trash-can pen_icon red" id="delete_div"></i></div>
          </div>
          `;
    let down = document.getElementById("down");
    let delete_div = document.getElementById("delete_div");
    delete_div.addEventListener("click", dltd_div);
    function dltd_div() {
      down.remove();
    }

    i++;
    count_num.innerText = i;
    enter_task.style.display = `none`;
    outer.style.opacity = `1`;
  } else if (opt == "In progress") {
    let createElement = document.createElement("div");
    card_two.appendChild(createElement);
    createElement.innerHTML = `
     <div class="gap_8 dis_flex white" id="down">
            <input class="checkbox" type="checkbox" />
            <p class="todo_list">${name}</p>
            <div><i class="fa-solid fa-pen pen_icon grey"></i></div>
            <div><i class="fa-solid fa-trash-can pen_icon red"></i></div>
          </div>
    `;
    a++;
    countNumOne.innerText = a;
    enter_task.style.display = `none`;
    outer.style.opacity = `1`;
  } else if (opt == "Done") {
    let createElement = document.createElement("div");
    card_three.appendChild(createElement);
    createElement.innerHTML = `
     <div class="gap_8 dis_flex white" id="down">
            <input class="checkbox" type="checkbox" />
            <p class="todo_list">${name}</p>
            <div><i class="fa-solid fa-pen pen_icon grey"></i></div>
            <div><i class="fa-solid fa-trash-can pen_icon red"></i></div>
          </div>
    `;
    b++;
    countNumTwo.innerText = b;
    enter_task.style.display = `none`;
    outer.style.opacity = `1`;
  } else if (opt == "Blocked") {
    let createElement = document.createElement("div");
    card_four.appendChild(createElement);
    createElement.innerHTML = `
     <div class="gap_8 dis_flex white" id="down">
            <input class="checkbox" type="checkbox" />
            <p class="todo_list">${name}</p>
            <div><i class="fa-solid fa-pen pen_icon grey"></i></div>
            <div><i class="fa-solid fa-trash-can pen_icon red"></i></div>
          </div>
    `;
    c++;
    countNumThree.innerText = c;
    enter_task.style.display = `none`;
    outer.style.opacity = `1`;
  }
}
