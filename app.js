const listsDiv = document.querySelector('.lists');

const userInput = document.querySelector('#userInput');
const addBtn = document.querySelector('.addBtn');

let groceryList = [];

function add() {
    if (userInput.value != '') {
        groceryList.push(userInput.value);
    }
    console.log(groceryList)

    updateUI();
    userInput.value = '';
}

function edit(button) {
    const listItemDiv = button.parentElement;
    let currentText = listItemDiv.querySelector('.listItemText').innerText;
    userInput.value = currentText;
    addBtn.innerText = 'Update';
    addBtn.setAttribute('onclick', `update('${currentText}')`);
}


function update(oldText) {
    if (userInput.value != '') {
        let itemIndex = groceryList.indexOf(oldText);
        groceryList[itemIndex] = userInput.value;
    }
    console.log(groceryList)

    updateUI();

    userInput.value = '';
    addBtn.innerText = 'Add';
    addBtn.setAttribute('onclick', `add(this)`);

}


function deleteItem(button) {

    const listItemDiv = button.parentElement;
    let oldText = listItemDiv.querySelector('.listItemText').innerText;

    let itemIndex = groceryList.indexOf(oldText);
    groceryList.splice(itemIndex, 1)

    console.log(groceryList)

    updateUI();
}


function updateUI() {
    listsDiv.innerHTML = '';
    groceryList.forEach(function (listItem) {

        listsDiv.innerHTML += `<div class="listItem"><span class="listItemText">${listItem}</span>
            <button onclick="edit(this)">Edit</button>
            <button onclick="deleteItem(this)">Delete</button>
            </div>`
    })
}