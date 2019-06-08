//JS code


const key = "b72d0821934296a82580c9a8b315a076"; //API key

var city = document.getElementById("search-txt");
var search = document.getElementById("search-btn");
var temp = document.getElementById("temp");
var maxmin = document.getElementById("maxmin");
var cloudiness = document.getElementById("cloudiness");

var cityname = document.getElementById("cityname");
var wind = document.getElementById("wind");
var description = document.getElementById("description");

search.addEventListener("click", getWeather);
city.addEventListener("keyup", pressed);

function pressed(event){
  if(event.key === "Enter"){
    getWeather();
  }
}

function getWeather(){
  if(city.value === ""){

  }
  else{
  request = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&APPID=" + key;
  httpRequestAsync(request, responses);
}
}
function responses(response){
  console.log("hello");
  let jsonObject = JSON.parse(response);//temp, snow, cloudiness, wind speed, rain volume, humidity
  cityname.innerHTML = jsonObject.name;

  temp.innerHTML = parseInt(jsonObject.main.temp * (9/5) - 459.67) + "F";
  humidity.innerHTML = jsonObject.main.humidity + "%";
  maxmin.innerHTML = parseInt(jsonObject.main.temp_min * (9/5) - 459.67) + "F/" + parseInt(jsonObject.main.temp_max * (9/5) - 459.67) + "F";
  cloudiness.innerHTML = jsonObject.clouds.all + "%";
  wind.innerHTML = jsonObject.wind.speed + " meter/sec";
  description.innerHTML = jsonObject.weather[0].description;


}

function httpRequestAsync(url, callback){
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous
    httpRequest.send();

}
