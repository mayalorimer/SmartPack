var flightNum = "";
var airLine = "";
var flightDate = "";
var latitude ="";
var longitude = "";
var flightUrl = `http://api.aviationstack.com/v1/flights?flight_number=${flightNum}&access_key=55013be62a6b251b0154473a727b8052`;
var citiesUrl = "http://api.aviationstack.com/v1/cities?latitude&longitude&access_key=55013be62a6b251b0154473a727b8052"
var originalUrl = "http://api.aviationstack.com/v1/flights?access_key=55013be62a6b251b0154473a727b8052";



function getApi() {
    
    fetch(citiesUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function(data){
        console.log(data)
        console.log(data.data[0])
    displayFlight(data.data[0])
      })
    }
     
  getApi();
  
  function displayFlight(flight){
      console.log(flight)
      flightDate = flight.flight_date
      console.log(flightDate)
  }

  function displayLongitude(longitude){
      console.log (longitude)
      
  }

  
  

    
    
   
// list of variables to verify
// rain = chance of rain
// temp = temperature from the forecast in farenheight 

//var apiWeatherKey = c99c17905b00b5b873d957ca08c3669d;
var lat = 51.509865;
var long = -0.118092;
var Ktemp;
var temp; 

var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&appid=c99c17905b00b5b873d957ca08c3669d';

function getApi(){
    fetch(weatherUrl)
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            Ktemp = data.list[1].main.temp; 
            temp = Math.floor((Ktemp - 273)*(9/5) + 32);
            rain = data.list[1].pop; 
            rain2 = data.list[1].weather.main;
            console.log(temp);
            console.log(rain);
            console.log(rain2);
        })
}


getApi();


/*
var packingList = [];

//if the weather forcasts rain
if(rain) {
    packingList.push("rain jacket"); 
}

//if you run hot
if (runHot) {
    if (temp < 50) {
        packingList.push("long pants", "long sleeve shirt", "sweater", "winter jacket", "closed toe shoes", "base layer shirt");
    }
    else if (temp >= 50 && temp < 65) {
        packingList.push("long pants", "long sleeve shirt", "light jacket");
    }
    else if (temp >= 65 && temp < 75) {
        packingList.push("shorts", "short sleeves", "light jacket"); 
    }
    else {
        packingList.push("shorts", "short sleeves", "t-shirt", "sandals");
    }
}
//if you run cold
else {
    if (temp < 50) {
        packingList.push("long pants", "long sleeve shirt", "sweater", "winter jacket", "closed toe shoes", "base layer shirt");
    }
    else if (temp >= 50 && temp < 65) {
        packingList.push("long pants", "long sleeve shirt", "moderate jacket");
    }
    else if (temp >= 65 && temp < 75) {
        packingList.push("long pants", "short sleeves", "long sleeves", "light jacket"); 
    }
    else {
        packingList.push("shorts", "short sleeves", "t-shirt", "sandals", "light jacket");
    }
}

if (business) {
    packingList.push("dress shoes", "slacks", "blazer", "formal top");
}

if (keepItPushing){
    packingList.push("sneakers", "athletic top", "athletic bottoms");
}

if (relax) {
    packingList.push("bathing suit", "flip flops");
}

if (both relax and push){
    packingList.push("sneakers", "flip flops", "athletic outfit", "bathing suit");
}

*/
