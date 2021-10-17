function populateTodoList(todos) {
  let unorderedLi = document.getElementById("todo-list");
  unorderedLi.innerHTML = "";

  todos.forEach(todo =>{
    let newLi = document.createElement("li");
    newLi.innerHTML = todo.task;
    newLi.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    unorderedLi.appendChild(newLi);
    let spanEl = document.createElement("span");
    spanEl.setAttribute("class", "badge bg-primary rounded-pill");
    newLi.appendChild(spanEl);

    //icon for lineThrough button
    let icon = document.createElement("i");
    icon.setAttribute("class", "fa fa-check");
    icon.setAttribute("aria-hidden", "true");
    spanEl.appendChild(icon);

    //icon for delete button
    let icon2 = document.createElement("i"); 
    icon2.setAttribute("class", "fa fa-trash");
    icon2.setAttribute("aria-hidden", "true");
    spanEl.appendChild(icon2);

    //EventListeners for lineThrough
    icon.addEventListener("click", ()=> {
      if (todo.completed == false){
        newLi.style.textDecoration = "line-through";
        todo.completed = true;
      } else {
        newLi.style.textDecoration = "none";
        todo.completed = false;
      }
    });
    //EventListener to delete
    icon2.addEventListener("click", ()=> {
      unorderedLi.removeChild(newLi)
    });
  })

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let inputBox = document.querySelector("#todoInput");
  let newItem = {
    task: inputBox.value,
    completed: false
  }
  todos.push(newItem);
  populateTodoList(todos);
  inputBox.value = "";
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
 
}
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).

const content = document.getElementById("content")
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete completed tasks";
  deleteBtn.style.backgroundColor = "#ee9b00";
  deleteBtn.style.margin = "50px" ;
  content.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteAllCompletedTodos);

function deleteAllCompletedTodos() {
  // Write your code here...
  let allList = document.querySelectorAll("ul li");
  allList.forEach(liEl => {
    if (liEl.style.textDecoration === "line-through"){
      liEl.remove();
    }
  })
}
