// variables
let addBtn = document.querySelector("#addItem");
let textValue = document.querySelector("#item");
let listing = document.querySelector(".list-items");
let clearBtn = document.getElementById("clear-all");

// functionalities
// adding shoping item
function addListItem(e) {
  e.preventDefault();
  let node = document.createElement("li");
  let innerSpan = document.createElement("span");
  let editBtn = document.createElement("button");
  let editnote = document.createTextNode("Edit");
  let deleteBtn = document.createElement("button");
  let deleteNote = document.createTextNode("Delete");
  deleteBtn.className = "delete-item";
  deleteBtn.appendChild(deleteNote);
  editBtn.appendChild(editnote);
  innerSpan.appendChild(editBtn);
  innerSpan.appendChild(deleteBtn);
  let innerNode = document.createTextNode(textValue.value);
  node.className = "item";
  node.appendChild(innerNode);
  node.appendChild(innerSpan);
  listing.appendChild(node);
  textValue.value = "";
  clearBtn.style.visibility = "visible";
}
function inputValue(e) {
  return e.target.value;
}
function deleteItem(e) {
  if (e.target.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
  if (listing.childNodes.length < 1) {
    clearBtn.style.visibility = "hidden";
  }
}
function clearAll() {
  listing.innerHTML = "";
  clearBtn.style.visibility = "hidden";
}
// events
addBtn.addEventListener("click", addListItem);
listing.addEventListener("click", deleteItem);
clearBtn.addEventListener("click", clearAll);
