function shoppingList(arrayOfItems) {
  let content = document.querySelector("#content");
  let unorderedLi = document.createElement("ul");
  content.appendChild(unorderedLi);
  arrayOfItems.forEach(item => {
    let list = document.createElement("li");
    list.innerText = item;
    unorderedLi.appendChild(list);
  })
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
