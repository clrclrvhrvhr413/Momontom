const div = document.querySelector(".welcomeContainer"),
    askForm = div.querySelector(".js-userNameForm"),
    userName = askForm.querySelector("#userName");
const div2 = div.querySelector(".logContainer"),
    welcome = div2.querySelector(".welcome"),
    btn = div2.querySelector("#logout");

const USER = "userName",
    SHOW_CLS = "showing";

function logoutUser(){
    localStorage.removeItem(USER);
    div2.classList.remove(SHOW_CLS);
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
    div2.classList.add(SHOW_CLS);
    welcome.innerHTML = `WELCOME ${name}`;
    saveUser(name);

    btn.addEventListener("click",handleLogout);
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