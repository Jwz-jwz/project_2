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
let card_one = document.getElementById("card_one");
let card_two = document.getElementById("card_two");
let card_three = document.getElementById("card_three");
let card_four = document.getElementById("card_four");

let count_num = document.getElementById("count_num");
let countNumOne = document.getElementById("countNumOne");
let countNumTwo = document.getElementById("countNumTwo");
let countNumThree = document.getElementById("countNumThree");

let get_name = document.getElementById("taskname");
let select_status = document.getElementById("select_status");
let submit = document.getElementById("submit");

let STATUSES = {
  TODO: "To do",
  INPROGRESS: "In Progress",
  DONE: "Done",
  BLOCKED: "Blocked",
};
let isCreating = false;
submit.addEventListener("click", make_array);

let todo_array = [];
function make_array() {
  let title = get_name.value;
  let status = select_status.value;
  let todoObject = {
    taskId: todo_array.length + 1,
    taskName: title,
    taskStatus: status,
  };
  todo_array.push(todoObject);
  console.log(todo_array);
  card_one.innerHTML = "";
  card_two.innerHTML = "";
  card_three.innerHTML = "";
  card_four.innerHTML = "";
  renderTask();
  isTrusted = true;
}

function renderTask() {
  for (let i = 0; i < todo_array.length; i++) {
    let card = "";
    if (todo_array[i].taskStatus === STATUSES.TODO) {
      let createElement = document.createElement("div");
      createElement.setAttribute("class", "gap_8 dis_flex white");
      createElement.setAttribute("id", "down");
      createElement.innerHTML = ` 
      <input class="checkbox" type="checkbox" />
      <p id="" class="todo_list">${todo_array[i].taskName}</p>
      <i class="fa-solid fa-pen pen_icon grey" id="pen"></i>
      <i class="fa-solid fa-trash-can pen_icon red" id="trash"></i>   
      `;
      card_one.appendChild(createElement);
      let pen = document.getElementById("pen");
      pen.addEventListener("click", editTask);
      pen.taskId = todo_array[i].taskId;

      let trash = document.getElementById("trash");
      trash.addEventListener("click", deleteTask);
      // trash.taskId = todo_array[i].taskId;
    } else if (todo_array[i].taskStatus === STATUSES.INPROGRESS) {
      let createElement = document.createElement("div");
      createElement.setAttribute("class", "gap_8 dis_flex white");
      createElement.setAttribute("id", "down");
      createElement.innerHTML = `       
              <input class="checkbox" type="checkbox" />
              <p id="" class="todo_list">${todo_array[i].taskName}</p>
              <i class="fa-solid fa-pen pen_icon grey" id="pen"></i>
              <i class="fa-solid fa-trash-can pen_icon red" id="trash"></i>           
      `;
      card_two.appendChild(createElement);
    } else if (todo_array[i].taskStatus === STATUSES.DONE) {
      let createElement = document.createElement("div");
      createElement.setAttribute("class", "gap_8 dis_flex white");
      createElement.setAttribute("id", "down");
      createElement.innerHTML = `      
              <input class="checkbox" type="checkbox" />
              <p id="" class="todo_list">${todo_array[i].taskName}</p>
              <i class="fa-solid fa-pen pen_icon grey" id="pen"></i>
              <i class="fa-solid fa-trash-can pen_icon red" id="trash"><i>             
      `;
      card_three.appendChild(createElement);
    } else if (todo_array[i].taskStatus === STATUSES.BLOCKED) {
      let createElement = document.createElement("div");
      createElement.setAttribute("class", "gap_8 dis_flex white");
      createElement.setAttribute("id", "down");
      createElement.innerHTML = `      
              <input class="checkbox" type="checkbox" />
              <p id="" class="todo_list">${todo_array[i].taskName}</p>
              <i class="fa-solid fa-pen pen_icon grey" id="pen"></i>
               <i class="fa-solid fa-trash-can pen_icon red" id="trash"></i>            
      `;
      card_four.appendChild(createElement);
    }
  }
  enter_task.style.display = `none`;
  outer.style.opacity = `1`;
}

function deleteTask(taskId) {
  let filteredTodo = [];
  for (i = 0; i < todo_array.length; i++) {
    if (todo_array[i].taskId >= -1) {
      filteredTodo.push(todo_array[i]);
    }
  }
  todo_array = filteredTodo;
}
function editTask(event) {
  let obj = todo_array.find((m) => m.taskId == event.target.taskId);
  get_name.value = obj.taskName;
}
