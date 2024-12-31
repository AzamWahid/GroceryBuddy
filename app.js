const listsDiv = document.querySelector('.lists');

const userInput = document.querySelector('#userInput');
const addBtn = document.querySelector('.addBtn');

let groceryList = [];

function add() {
    if (userInput.value != '') {
        groceryList.push(userInput.value);
    }

    updateUI();
    userInput.value = '';
}

function edit(button) {

    const listItemBtnDiv = button.parentElement;
    const listItemDiv = listItemBtnDiv.previousElementSibling;

    let currentText = listItemDiv.innerHTML;
    userInput.value = currentText;
    addBtn.innerText = 'Update';
    addBtn.setAttribute('onclick', `update('${currentText}')`);
}


function update(oldText) {
    if (userInput.value != '') {
        let itemIndex = groceryList.indexOf(oldText);
        groceryList[itemIndex] = userInput.value;
    }

    updateUI();

    userInput.value = '';
    addBtn.innerText = 'Add';
    addBtn.setAttribute('onclick', `add(this)`);

}


function deleteItem(button) {

   
    const listItemBtnDiv = button.parentElement;
    const listItemDiv = listItemBtnDiv.previousElementSibling;
    console.log(listItemDiv.id)


    let itemIndex = listItemDiv.id;
    groceryList.splice(itemIndex, 1)


    updateUI();
}


function updateUI() {
    listsDiv.innerHTML = '';
    groceryList.forEach(function (listItem, index) {

        listsDiv.innerHTML += `<div class="listItem">
                                    <div class="listItemText" id="${index}">${listItem}</div>
                                    <div class="listItemBtn">
                                        <i onclick="edit(this)" class="fa-regular fa-pen-to-square fa-lg" style="color: #058a62;"></i>
                                        <i onclick="deleteItem(this)" class="fa-solid fa-trash" style="color: #f02d2d;"></i>
                                    </div>
                                </div>`
    })
}