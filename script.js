// variables
let addBtn = document.querySelector("#addItem");
let textValue = document.querySelector("#item");
let listing = document.querySelector(".list-items");
console.log(textValue);
// functionalities
// adding shoping item
function addListItem(e) {
  e.preventDefault();
  let node = document.createElement("li");

  let innerNode = document.createTextNode(textValue.value);
  node.appendChild(innerNode);
  listing.appendChild(node);
}
function inputValue(e) {
  return e.target.value;
}
// events
addBtn.addEventListener("click", addListItem);
