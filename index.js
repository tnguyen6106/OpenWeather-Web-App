//JS code

const key = "b72d0821934296a82580c9a8b315a076"; //API key

city = document.getElementById("search-text");
seach = document.getElementById("search-button");

search.addEventListener("click", getWeather);

function getWeather(){
  request = "https://api.openweathermap.org/data/2.5/weather?q=" + search.value + "&appid=" + key;
  httpsRequestAsync(search, response);
}

function response(response){
  //parse json 
}
