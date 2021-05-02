const todoDiv = document.querySelector(".todoCont"),
    doForm = todoDiv.querySelector(".js-todoForm"),
    doInp = doForm.querySelector("#todo"),
    doing = todoDiv.querySelector(".js-doing"),
    done = todoDiv.querySelector(".js-done");

const LIST = "todoList",
    BTN_CLS = "todobtn";
let TODO_LIST = [];

function handleCheck(event) {
    const btn = event.target,
        li = btn.parentNode;
    let findout = TODO_LIST.find(element => { return element.id === parseInt(li.id,10) });

    if (findout.isdone === false) {
        findout.isdone = true;
        btn.innerText = "😬";
        done.appendChild(li);
    } else {
        findout.isdone = false;
        btn.innerHTML = "✅";
        doing.appendChild(li);
    }
    saveTodo(TODO_LIST);
}
function handleDelete(event) {
    const li = event.target.parentNode;
    const findout = TODO_LIST.find(element => { return element.id === parseInt(li.id) });
    if (findout.isdone === false) {
        doing.removeChild(li);
    } else {
        done.removeChild(li);
    }

    TODO_LIST.splice(TODO_LIST.indexOf(findout), 1);
    saveTodo(TODO_LIST);
}
function saveTodo(DoObj) {
    localStorage.setItem(LIST, JSON.stringify(DoObj));
}
function addList(text,doneCheck) {
    const li = document.createElement("li"),
        delbtn = document.createElement("button"),
        checkbtn = document.createElement("button"),
        span = document.createElement("span"),
        id = TODO_LIST.length + 1,
        isdone = doneCheck===undefined?false:doneCheck;

    span.innerHTML = text;
    delbtn.innerHTML = "❌";
    delbtn.classList.add(BTN_CLS);
    checkbtn.classList.add(BTN_CLS);
    li.appendChild(delbtn);
    li.appendChild(checkbtn);
    li.appendChild(span);
    li.id = id;
    if (isdone === false) {
        checkbtn.innerHTML = "✅";
        doing.appendChild(li);

    } else {
        checkbtn.innerHTML = "😬";
        done.appendChild(li);
    }


    const DoObj = {
        text: text,
        id: id,
        isdone: isdone
    };
    TODO_LIST.push(DoObj);

    saveTodo(TODO_LIST);

    delbtn.addEventListener("click", handleDelete);
    checkbtn.addEventListener("click", handleCheck);
}
function handleSubmit(event) {
    event.preventDefault();
    const text = doInp.value;
    addList(text);
    doInp.value = "";
}
function loadList() {
    const list = localStorage.getItem(LIST);
    if (list !== null) {
        const arr = JSON.parse(list);
        arr.forEach(element => { addList(element.text,element.isdone); });
    }
}
function init() {
    loadList();
    doForm.addEventListener("submit", handleSubmit);
}
init();