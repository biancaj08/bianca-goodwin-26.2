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


const temperature = document.getElementById("temperature-result");
let result = document.getElementById("result");
let weather;
let temps;

 const temperatures = fetch('https://api.openweathermap.org/data/2.5/weather?q=Raleigh&appid=33333c9f0169b63ccdbac11f3b32f09c&units=imperial')
.then(response => {
    if (!response.ok) {
        throw new Error("Request failed");
    }
    return response.json();
}).then(data => {
    //console.log("data: ", data);
     return temps = data.main.temp;
    console.log(temps);  

   
}
).finally(temperature.innerHTML = temps);
const weatherCondition = fetch('https://api.openweathermap.org/data/2.5/weather?q=Raleigh&appid=33333c9f0169b63ccdbac11f3b32f09c&units=imperial')
.then(response => {
    if (!response.ok){
        throw new Error("Request failed");
     }
    return response.json();
 }).then(data => {
    let weather = data.main.feels_like;
    console.log(weather);
    return weather;
    result.innerHTML = weather;
    
 }).finally()









