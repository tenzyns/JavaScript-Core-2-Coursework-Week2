let jumbo = document.querySelector(".jumbotron");
let donateBikeBtn = document.querySelector("a.btn-primary.btn-lrg");
let volunteerBtn = document.querySelector("a.btn-secondary");

//------Blue button manipulation
const blueBtn = document.getElementById("blueBtn");
blueBtn.addEventListener("click", blueFunction);

function blueFunction (){
    jumbo.style.backgroundColor = "#588fbd";
    donateBikeBtn.style.backgroundColor = "#ffa500";
    volunteerBtn.style.backgroundColor = "black"
    volunteerBtn.style.color = "white";
}

//------Orange button manipulation
const orangeBtn = document.getElementById("orangeBtn");
orangeBtn.addEventListener("click", orangeFunction);

function orangeFunction(){
    jumbo.style.backgroundColor = "#f0ad4e";
    donateBikeBtn.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "white";
}

//------Green button manipulation
const greenBtn = document.getElementById("greenBtn");
greenBtn.addEventListener("click", greenFunction);

function greenFunction(){
    jumbo.style.backgroundColor = "#87ca8a";
    donateBikeBtn.style.backgroundColor = "black";
    volunteerBtn.style.backgroundColor = "#8c9c08";
}

//----form validation 
const userName = document.getElementById("example-text-input");
const userEmail = document.getElementById("exampleInputEmail1");
const userText = document.getElementById("exampleTextarea");
const form = document.querySelector("form");
const submit = document.querySelector("form button.btn-primary");
submit.addEventListener("click", validateForm);

//----call back function
function validateForm(event){
    event.preventDefault(); 
    if (userName.value.length > 0 && userEmail.value.length > 0 && userText.value.length > 0 && userEmail.value.includes("@")){
        userName.style.backgroundColor = "white";
        userText.style.backgroundColor = "white";
        userEmail.style.backgroundColor = "white";
        alert("Thank you for filling out the form.");
        form.reset();
        
    } else { 
    if (userName.value.length < 1)
        userName.style.backgroundColor = "red";
     if (userText.value.length < 1)
        userText.style.backgroundColor = "red";
     if (userEmail.value.length < 1 || !userEmail.value.includes("@"))
        userEmail.style.backgroundColor = "red"; 
    }
}
