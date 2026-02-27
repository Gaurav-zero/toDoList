export function changeColor(prioritySelector, doneCheck){
    if(prioritySelector.value == "1"){
        doneCheck.style.border= "2px solid red";
    }

    if(prioritySelector.value == "2"){
        doneCheck.style.backgroundColor= "orange";
    }

    if(prioritySelector.value == "3"){
        doneCheck.style.backgroundColor= "yellow";
    }

    if(prioritySelector.value == "4"){
        doneCheck.style.backgroundColor= "green";
    }
}