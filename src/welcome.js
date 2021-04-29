const div = document.querySelector(".welcomeContainer"),
    askForm = div.querySelector(".js-userNameForm"),
    userName = askForm.querySelector("#userName")
    welcome = div.querySelector(".welcome");

const USER = "userName",
    SHOW_CLS = "showing";

function saveUser(name){
    localStorage.setItem(USER,name);
}
function welcomeUser(name){
    askForm.classList.remove(SHOW_CLS);
    welcome.classList.add(SHOW_CLS);
    welcome.innerHTML = `WELCOME ${name}`;
    saveUser(name);
}
function handleSubmit(event){
    event.preventDefault();
    const user = userName.value;
    welcomeUser(user);
}
function askUserName(){
    askForm.classList.add(SHOW_CLS);
    askForm.addEventListener("submit",handleSubmit);
}
function loadUser(){
    const user = localStorage.getItem(USER);
    if (user !== null){
        welcomeUser(user);
    }else {
        askUserName();
    }
}
function init(){
    loadUser();
}
init();