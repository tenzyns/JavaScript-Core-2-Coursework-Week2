function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(ppl => {
    let heading1 = document.createElement("h1");
    heading1.innerText = ppl.name;
    content.appendChild(heading1);
    let heading2 = document.createElement("h2");
    heading2.innerText = ppl.job;
    content.appendChild(heading2);
  });
  
  

}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
