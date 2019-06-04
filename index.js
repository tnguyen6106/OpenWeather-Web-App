//JS code

const key = "b72d0821934296a82580c9a8b315a076"; //API key

city = document.getElementById("search-txt");
search = document.getElementById("search-btn");
temp = document.getElementById("temp");
snow = document.getElementById("snow");
cloudiness = document.getElementById("cloudiness");
icon = document.getElementById("icon");
wind = document.getElementById("wind");
rain = document.getElementById("rain");

search.addEventListener("click", getWeather);
city.addEventListener("keyup", pressed);

function pressed(event){
  if(event.key === "Enter"){
    getWeather();
  }
}
function getWeather(){
  request = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&APPID=" + key;
  httpRequestAsync(request, responses);
}

function responses(response){
  let jsonObject = JSON.parse(response);
  //temp, snow, cloudiness, wind speed, rain volume, humidity
  city.innerHTML = jsonObject.name;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temp.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
  humidity.innerHTML = jsonObject.main.humidity + "%";
  snow.innerHTML = jsonObject.snow;
  cloudiness.innerHTML = jsonObject.main.clouds;
  wind.innerHTML = jsonObject.wind;
  rain.innerHTML = jsonObject.rain;


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
