const apiKey ="47ab956ad1ee3995c39ce5b8a296c098";
const apiurl ="https://api.openweathermap.org/data/2.5/weather";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function checkWeather(city){
    const response = await fetch(`${apiurl}?q=${city}&appid=${apiKey}&units=metric`);
     
    var data = await response.json();
    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";


}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
