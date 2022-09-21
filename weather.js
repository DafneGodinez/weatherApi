
var lat;
var long;

function WeatherAPI() {
  var request = new XMLHttpRequest();
  
  // Open a new connection, using GET request on the URL endpoint
  // Asincronas

  request.onload = function (resp) {
    console.log(resp.target.response);
    console.log(JSON.parse(resp.target.response));
    
    var data = JSON.parse(resp.target.response);
    console.log(data.name);
    console.log(data.main.temp);
    
    var dataElement = document.getElementById("temp");
    dataElement.innerHTML = "Temperatura: " + data.main.temp; 
    
    var dataElement2 = document.getElementById("city");
    dataElement2.innerHTML = "Ciudad: " + data.name; 
  }
  
  var latElement = document.getElementById("Latitud");
  var longElement = document.getElementById("Longitud");
  lat = latElement.value;
  long = longElement.value;
  console.log(lat);
  console.log(long);

 request.open('GET', "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=8e59d540bf55d8460dc988843b8c7cbb&units=metric", true);
    
 request.send();
     
}


