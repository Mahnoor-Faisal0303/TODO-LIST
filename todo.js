const itemBox = document.getElementById("items");
const listContainer = document.getElementById("list-container");
let count = 0;
let item;

const addbtn = document.getElementById("button_add");
const updatebtn = document.getElementById("button_update");

function addTask() {
  if (itemBox.value.trim() == "") {
    alert("you must write somethig2")
    return;
  }
    //list creation
    let li = document.createElement("li");

    count++; //unique id

    // using string literals for btns
    li.innerHTML = ` ${itemBox.value} <div class="btns">
        <button id="delete${count}" >Delete</button>
        <button id="edit${count}">Edit</button>
        </div>`;

    //  set the attribute for added list
    li.setAttribute("class", "item-list");
    li.setAttribute("id", "li" + count);
    listContainer.appendChild(li);

    document.getElementById("delete" + count).onclick = function () {
      listContainer.removeChild(li);
    };
    document.getElementById("edit" + count).onclick = function () {
      addbtn.style.display = "none";
      updatebtn.style.display = "inline";
      item = li;

      itemBox.value = li.firstChild.nodeValue;
    };

    itemBox.value = "";
  }
  // else {
  //   alert("You Must Write Something!");
  // }

function updateTask() {
  item.firstChild.nodeValue = itemBox.value;
  addbtn.style.display = "inline";
  updatebtn.style.display = "none";
  itemBox.value = "";
}
