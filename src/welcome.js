const menu = document.querySelector(".menu"),
    welDiv = menu.querySelector(".welcomeContainer"),
    askForm = welDiv.querySelector(".js-userNameForm"),
    userName = askForm.querySelector("#userName");
const welDiv2 = welDiv.querySelector(".js-logContainer"),
    welcome = welDiv2.querySelector(".js-welcome"),
    logoutbtn = welDiv2.querySelector("#js-logout");

const USER = "userName",
    SHOW_CLS = "showing";

function logoutUser(){
    localStorage.removeItem(USER);
    welDiv2.classList.remove(SHOW_CLS);
    askForm.classList.add(SHOW_CLS);
    userName.value="";
}
function handleLogout(event){
    event.preventDefault();
    logoutUser();
}
function saveUser(name){
    localStorage.setItem(USER,name);
}
function welcomeUser(name){
    askForm.classList.remove(SHOW_CLS);
    welDiv2.classList.add(SHOW_CLS);
    welcome.innerHTML = `WELCOME ${name}`;
    saveUser(name);

    logoutbtn.addEventListener("click",handleLogout);
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