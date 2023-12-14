const itemBox = document.getElementById("items");
const container = document.getElementById("list-container");
let global_id = 0;
let todos = [];
function mapData() {
  container.innerHTML = "";
  todos.map((item) => {
    container.innerHTML += `<li class="item-list">${item.name} 
            <div class="btns">
            <button onclick="Delete(${item.id})">Delete</button>
            <button onclick="Edit(${item.id})">Edit</button><br></div>`;
  });
}
function addTask() {
  if (itemBox.value.trim() == "") {
    alert("you must write somethig");
    return;
  }
  global_id = global_id + 1;
  const newItem = { id: global_id, name: itemBox.value };
  todos.push(newItem);
  itemBox.value = "";
  mapData();
}
function Delete(id) {
  todos = todos.filter((item) => item.id !== id);
  mapData();
}
let new_id = null;
function Edit(id) {
  let editedItem = todos.find((item) => item.id == id);
  new_id = id;
  if (editedItem) {
    itemBox.value = editedItem.name;
    button_update.classList = [];
    button_add.classList = [];
    button_add.classList.add("displayNone");
    button_update.classList.add("displayShow");
  }
}
function updateTask() {
  if (itemBox.value.trim() == "") {
    alert("you must write somethig");
    return;
  }
  console.log(new_id);
  let editedItem = todos.find((item) => item.id == new_id);
  console.log(todos);
  editedItem.name = itemBox.value;
  itemBox.value = "";
  button_update.classList = [];
  button_add.classList = [];
  button_add.classList.add("displayShow");
  button_update.classList.add("displayNone");
  mapData();
}
