const API_KEY = "387b6a0befcadb13751379b1b024b94e";
const COORDS = "coords";
const weather = document.querySelector(".js-weather");

function getWeather(lat,lon){
    const image = new Image();
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const icon = json.weather[0]['icon'];
        image.src = `http://openweathermap.org/img/wn/${icon}@4x.png`
        weather.innerHTML = `${json.name} ${json.main.temp}ºC`;
        weather.appendChild(image);
    });
}
function saveCoords(obj){
    localStorage.setItem(COORDS,JSON.stringify(obj));
}
function handleError(){
    console.log("cant get your location!");
}
function handleSuccess(position){
    const latitude = position.coords.latitude,
        longitude = position.coords.longitude;
    
    const coordsObj = {
        latitude,
        longitude
    }

    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
function getCoords(){
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}
function loadCoords(){
    const myCoords =  localStorage.getItem(COORDS);
    if(myCoords === null){
        getCoords();
    }else{
        const parseCoords = JSON.parse(myCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}
function init(){
    loadCoords();
}
init();