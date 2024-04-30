"use strict";

// Array to store deleted items (acts as a 'trash' bin)
let trashBin = [];

// Function to add a new task to the list
const addTask = () => {
    const inputA = document.querySelector("#task").value;

    if (inputA === "") {
        const modal = document.querySelector("#my-modal");
        modal.showModal();
        return;
    }

    const theList = document.querySelector("#list-of-tasks");
    const listItem = document.createElement("li");
    listItem.innerText = `${inputA}`;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.onclick = () => {
        // Move deleted item to trash
        trashBin.push(listItem.childNodes[0]);
        theList.removeChild(listItem);
    };

    // Append delete button to list item
    listItem.appendChild(deleteButton);

    theList.append(listItem);

    listItem.addEventListener("click", () => {
        if (!listItem.classList.contains("done")) {
            const currentDate = new Date().toLocaleDateString();
            const dateDisplay = document.createElement("span");
            dateDisplay.innerText = ` (Completed on: ${currentDate})`;
            listItem.appendChild(dateDisplay);
        } else {
            const dateDisplay = listItem.querySelector("span");
            if (dateDisplay) {
                listItem.removeChild(dateDisplay);
            }
        }
        listItem.removeChild(listItem.querySelector("button"))
        listItem.appendChild(deleteButton)
        listItem.classList.toggle("done");
    })
}

// Function to undo the last deletion
const undoDelete = () => {

}

window.onload = () => {
    const closingButton = document.querySelector("#closing");

    closingButton.addEventListener("click", () => {
        const modal = document.getElementById("my-modal");
        modal.close();
    })
}
