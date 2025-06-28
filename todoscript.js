let inputbox = document.getElementById("inputbox");
let listcontainer = document.getElementById("list-container");

function data(){
    if(inputbox.value === ''){
        alert("enter some values")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";

}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

/*
listcontainer.addEventListener("click", function(e) {...}, false);
Attaches a click event listener to the listcontainer element (which is the <ul> tag).

Whenever you click anywhere inside the list, this function runs.

e is the event object, which gives details about what was clicked.

🔹 if (e.target.tagName === "LI")
Checks if the clicked element is an <li> (a task item).

If yes, it toggles the class "checked" on it.

🔸 e.target.classList.toggle("checked");
Adds the "checked" class if it's not present, or removes it if it is.

This is often used to mark a task as done, usually with a strikethrough or color change.

🔹 else if (e.target.tagName === "SPAN")
If the clicked element is a <span>, this means the user clicked the delete button (×).

Then it removes the whole task item.

🔸 e.target.parentElement.remove();
e.target is the <span>.

parentElement is the <li> that contains the span.

.remove() deletes the <li> from the DOM (i.e., from the list).*/