function todoList(todos) {
  // Write your code here...
  const content = document.getElementById("content");
  const unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);

  todos.forEach(task => {
    let taskList = document.createElement("li");
    taskList.innerText = task.todo; //Each of the todo value text
    unorderedList.appendChild(taskList);

    function lineThrough(){
      if (taskList.style.textDecoration !== "line-through"){
      taskList.style.textDecoration = "line-through";
    } else {
      taskList.style.textDecoration = "none";
    }
    };   
    taskList.addEventListener("click", lineThrough);
  })
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);