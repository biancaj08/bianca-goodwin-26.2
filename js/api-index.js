fetch('https://api.github.com/users/biancaj08/repos')
.then(response => {
    if (!response.ok) {
        throw new Error("Request failed");
    }
    return response.json();
})
   
 .then(data => {
    console.log("data: ", data);
    repositories = [...data];
    console.log("repositories: ", repositories);})


const temperature = document.getElementById("#condition h2")
let result = document.getElementById("result");
let weather;
let temps;

 const temperatures = fetch('https://api.openweathermap.org/data/2.5/weather?q=Raleigh&appid=33333c9f0169b63ccdbac11f3b32f09c&units=imperial')
.then(response => {
    if (!response.ok) {
        throw new Error("Request failed");
    }
    return response.json();
}).then(data =>  {
     let temps = data.main.temp;
     
})

const weatherCondition = fetch('https://api.openweathermap.org/data/2.5/weather?q=Raleigh&appid=33333c9f0169b63ccdbac11f3b32f09c&units=imperial')
.then(response => {
    if (!response.ok){
        throw new Error("Request failed");
     }
    return response.json();
 }).then(data => {
    let weather = data.main.feels_like;
    return weather; 
    //console.log(weather);

    
 })


//attach listener event listeners to your search buttons


//const weatherButton = document.querySelector("search1");

//d's value inside the  handlers

let tempButton = document.getElementById("button1");

tempButton.addEventListener('click', e => {

console.log(temps);

})


let tempButton2 = document.getElementById("button2");

tempButton.addEventListener('click', e => {

console.log(weather);

})