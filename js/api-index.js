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



let weather;
let temps;

let firstButton = document.getElementById("button1");
let secondButton = document.getElementById("button2");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");


 const temperatures = fetch('https://api.openweathermap.org/data/2.5/weather?q=Raleigh&appid=33333c9f0169b63ccdbac11f3b32f09c&units=imperial')
.then(response => {
    if (!response.ok) {
        throw new Error("Request failed");
    }
    return response.json();
}).then(data => {
     temps = data.main.temp;
     firstButton.addEventListener("click",  e =>{
        result1.innerText =`The temperature today is ${temps}`;
    })

})
const weatherCondition = fetch('https://api.openweathermap.org/data/2.5/weather?q=Raleigh&appid=33333c9f0169b63ccdbac11f3b32f09c&units=imperial')
.then(response => {
    if (!response.ok){
        throw new Error("Request failed");
     }
    return response.json();
 }).then(data => {
    weather = data.main.feels_like;
    secondButton.addEventListener("click",  e =>{
        //create a section fill in the inner text with a template literal 
        result2.innerText = `It feels like it is ${weather}`;

    })
 })





