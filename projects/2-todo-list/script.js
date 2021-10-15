function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  let liHtml = '';
  todos.forEach(todo => {

    //"uid"is a call back function for creating random id for each list item created for click event use.
    const uid = function(){
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    const id = uid();
    liHtml += `<li id = "${id}" class="list-group-item d-flex justify-content-between align-items-center"> ${todo.task} <span class="badge bg-primary rounded-pill"> <i class="fa fa-check" aria-hidden="true" onclick="markDone('${id}')"></i> <i class="fa fa-trash" aria-hidden="true" onclick="markDeleted('${id}')"></i></span></li>`;
    
    function markDone(id){
      let listItem = document.getElementById(id);
      if (listItem.innerText === todo.task && todo.completed === true){
        listItem.style.textDecoration = "none";
        todo.completed = false;
      }else{
        listItem.style.textDecoration = "line-through";
        todo.completed = true;
      }
    }

    function markDeleted(id){
      let listItem = document.getElementById(id);
      if 

    }
//clickEvent function 

  });
  list.innerHTML = liHtml;
 
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
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let inputBox = document.getElementById("todoInput");
  alert(inputBox.value);
  const newTodo = {task: inputBox.value, completed: false};
  todos.push(newTodo);
  console.log(`we now have ${todos.length} todo items`);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
