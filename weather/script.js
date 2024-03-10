
const apiKey = "b7df88f0e19fbbe0ee54ed21d4c8672e";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbar = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function weatherCheck(city) {
  const response = await fetch(url + city + `&appid=${apiKey}`);
  if (!response.ok){
    alert ("City not found!. please enter a valid city!");
    document.querySelector(".city").innerHTML = "Not found";
  document.querySelector(".temp").innerHTML = "Not found";
  document.querySelector(".wind").innerHTML = "Not found"
  document.querySelector(".humidity").innerHTML = "Not found";
  document.querySelector(".weather").innerHTML = "Not found";
  };
  let data = await response.json();
  // console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".weather").innerHTML = data.weather[0].main;
}

searchbtn.addEventListener("click", () => {
  if  (searchbar.value == "") {   
  document.querySelector(".city").innerHTML = "Not found";
  document.querySelector(".temp").innerHTML = "Not found";
  document.querySelector(".wind").innerHTML = "Not found"
  document.querySelector(".humidity").innerHTML = "Not found";
  document.querySelector(".weather").innerHTML = "Not found";
  alert("Please enter a city!"); 
  } else {
    weatherCheck(searchbar.value);
  }
});