let outer = document.getElementById("outer");
let btn = document.getElementById("butt");
let enter_task = document.getElementById("enter_task");

let card_one = document.getElementById("card_one");
let card_two = document.getElementById("card_two");
let card_three = document.getElementById("card_three");
let card_four = document.getElementById("card_four");

let get_name = document.getElementById("taskname");
let select_status = document.getElementById("select_status");
let submit = document.getElementById("submit");

let count_num = document.getElementById("count_num");
let countNumOne = document.getElementById("countNumOne");
let countNumTwo = document.getElementById("countNumTwo");
let countNumThree = document.getElementById("countNumThree");

btn.addEventListener("click", box_s);
function box_s() {
  enter_task.style = `
  display: flex;
  flex-direction: column`;
  outer.style.opacity = 0.4;
}

// cod dund ashiglah huvisagch
let taskId = 0;
let isCreatingTask = false;

// dslkfldj*****************************
let STATUSES = {
  TODO: "To do",
  INPROGRESS: "In Progress",
  DONE: "Done",
  BLOCKED: "Blocked",
};

// function do_arr() {
//   let title = get_name.value;
//   let status = select_status.value;
//   todo_array.push({ title, status });
//   console.log(todo_array);
// }

submit.addEventListener("click", add_task);

function add_task() {
  let todos = [];
  let title = get_name.value;
  let status = select_status.value;
  todos.push({ title, status });
  console.log(todos);
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].status === STATUSES.TODO) {
      let createElement = document.createElement("div");
      createElement.setAttribute("class", "gap_8 dis_flex white");
      createElement.setAttribute("id", "down");
      createElement.innerHTML = ` 
              <input class="checkbox" type="checkbox" />
              <p id="" class="todo_list">${todos[i].title}</p>
              <i onclick="editTask(${todos[i].id})" class="fa-solid fa-pen pen_icon grey" id="pen"></i>
              <i class="fa-solid fa-trash-can pen_icon red" id="trash"></i>   
      `;
      card_one.appendChild(createElement);
      card_one.addEventListener("click", function (e) {
        if (e.target.id === "trash") {
          const adddd = e.target.closest("#down");
          card_one.removeChild(adddd);
        }
      });
      card_one.addEventListener("click", function (e) {
        if (e.target.id === "pen") {
          let penElement = e.target.parentElement;
          let penText = penElement.firstChild.textContent.trim();
          let input = docuent.createElement("input");
          input.type = "text";
          input.value = penText;
        }
      });
    } else if (todos[i].status === STATUSES.INPROGRESS) {
      let createElement = document.createElement("div");
      createElement.setAttribute("class", "gap_8 dis_flex white");
      createElement.setAttribute("id", "down");
      createElement.innerHTML = `       
              <input class="checkbox" type="checkbox" />
              <p id="" class="todo_list">${todos[i].title}</p>
              <div><i onclick="editTask(${todos[i].id})" class="fa-solid fa-pen pen_icon grey" id="pen"></i></div>
              <i class="fa-solid fa-trash-can pen_icon red" id="trash"></i>           
      `;
      card_two.appendChild(createElement);
      card_two.addEventListener("click", function (e) {
        if (e.target.id === "trash") {
          const adddd = e.target.closest("#down");
          card_two.removeChild(adddd);
        }
      });
    } else if (todos[i].status === STATUSES.DONE) {
      let createElement = document.createElement("div");
      createElement.setAttribute("class", "gap_8 dis_flex white");
      createElement.setAttribute("id", "down");
      createElement.innerHTML = `      
              <input class="checkbox" type="checkbox" />
              <p id="" class="todo_list">${todos[i].title}</p>
              <div><i onclick="editTask(${todos[i].id})" class="fa-solid fa-pen pen_icon grey" id="pen"></i></div>
              <i class="fa-solid fa-trash-can pen_icon red" id="trash"><i>             
      `;
      card_three.appendChild(createElement);
      card_three.addEventListener("click", function (e) {
        if (e.target.id === "trash") {
          const adddd = e.target.closest("#down");
          card_three.removeChild(adddd);
        }
      });
    } else if (todos[i].status === STATUSES.BLOCKED) {
      let createElement = document.createElement("div");
      createElement.setAttribute("class", "gap_8 dis_flex white");
      createElement.setAttribute("id", "down");
      createElement.innerHTML = `      
              <input class="checkbox" type="checkbox" />
              <p id="" class="todo_list">${todos[i].title}</p>
              <div><i onclick="editTask(${todos[i].id})" class="fa-solid fa-pen pen_icon grey" id="pen"></i></div>
               <i class="fa-solid fa-trash-can pen_icon red" id="trash"></i>            
      `;
      card_four.appendChild(createElement);
      card_four.addEventListener("click", function (e) {
        if (e.target.id === "trash") {
          const adddd = e.target.closest("#down");
          card_four.removeChild(adddd);
        }
      });
    }
  }
  enter_task.style.display = `none`;
  outer.style.opacity = `1`;
  title.value = "";
  status.value = "";
  taskId = 0;
  isCreatingTask = false;
}
