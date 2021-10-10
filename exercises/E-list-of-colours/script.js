function listOfColours(colours) {
  const content = document.getElementById("content");
  content.style.margin = 250;
  const select = document.createElement("select");
  
  let para = document.createElement("p");
  content.appendChild(select);
  content.appendChild(para);
  let option = document.createElement("option");
  select.appendChild(option);
    option.value = " "; //this bit creates the default selected value
    option.innerText = "--Choose a colour--";

  colours.forEach(colour => {
    let option = document.createElement("option");
    select.appendChild(option);
    option.value = colour;
    option.innerText = colour;
    
    
    function changeColor(){
      let selectedValue = select.options[select.selectedIndex].value;
      //the above line was tricky to discover
      para.style.color = selectedValue;
      console.log("hello I am working");
      para.innerText = `You have selected: ${selectedValue}`;
    }
    select.addEventListener("change", changeColor);
  })
  
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
