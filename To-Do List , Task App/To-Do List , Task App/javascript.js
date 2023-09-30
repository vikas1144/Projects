const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = " ";
    saveData(); //this will called and save the data.
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData(); //this will called and save the data.
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); //this will called and save the data.
    }
},  false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); //storage in brower in name of 'data'; //this will called and save the data.
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); //it will stroge all the content with the name of data.
}
showTask();