import "./styles.css";
import {Todos, toDoList, addNewTask,displayTasks} from "./todos.js";


const f= document.querySelector("form");
const addBtn= document.querySelector(".addBtn");
const title= document.querySelector("#titleTask");
const taskDesc= document.querySelector("#taskDesc");

addBtn.addEventListener("click", (e)=>{
    f.style.display="block";
});

f.addEventListener("submit", (e)=>{
    e.preventDefault();
    addNewTask(title.value, taskDesc.value);
    title.value="";
    taskDesc.value="";
    displayTasks();
    f.style.display="none";
});