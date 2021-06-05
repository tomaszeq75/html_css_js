const todoElement = document.querySelector("#todo");
const btnAdd = document.querySelector("#add");
const list = document.querySelector("#list");

btnAdd.addEventListener('click', addToList);

todoElement.addEventListener("keyup", isEnter);

function isEnter(ev) {
    if (ev.keyCode === 13) {
        btnAdd.click();
    }
}

function addToList() {
    let innerText = todoElement.value;
    if (innerText.trim() == '') return;
    const btnRemove = document.createElement('button');
    btnRemove.innerText = 'x';
    btnRemove.addEventListener("click", removeFromList)

    const newElement = document.createElement('li');
    newElement.innerText = innerText;
    newElement.classList.add('item')
    newElement.addEventListener('click', doneToggle)
    newElement.appendChild(btnRemove);
    newElement.style.height = "0px";
    newElement.style.opacity = "0";
    newElement.style.transform = "all 500ms";
    list.appendChild(newElement);
    setTimeout(() => {
        newElement.style.height = "21px";
    }, 10)
    setTimeout(() => {
        newElement.style.opacity = "1";
    }, 400)

    todoElement.value = '';
}

function removeFromList() {
    this.parentElement.style.opacity = '0'
    this.parentElement.style.height = '0px'
    this.parentElement.style.margin = '0'
    this.parentElement.style.padding = '0'
    setTimeout(() => {
        this.parentElement.remove();
    }, 500)
}

function doneToggle() {
    this.classList.toggle('done')
    console.log("toggle")
}






