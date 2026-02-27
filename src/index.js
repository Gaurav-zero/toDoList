import "./styles.css";
import {Todos, toDoList, addNewTask,displayTasks} from "./todos.js";


const f= document.querySelector("form");
const addBtn= document.querySelector(".addBtn");
const title= document.querySelector("#titleTask");

addBtn.addEventListener("click", (e)=>{
    f.style.display="block";
});

f.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(toDoList[0]);
    addNewTask(title.value);
    title.value="";
    displayTasks();
    console.log(toDoList[0]);
});