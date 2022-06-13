const landingPage = document.getElementById('landing-page');
const flightSearch = document.getElementById('flight-search');
const flightForm = document.getElementById('flight-query');
const flightSearchBtn = document.getElementById('submit-flight-btn');
const userQuizHeader = document.getElementById('user-quiz-header');
const userQuiz = document.getElementById('user-quiz');
const question = document.getElementById('question');
const submitQuizBtn = document.getElementById('submit-quiz-btn');


var airline = document.getElementById("airline");
var flightNumber = document.getElementById("flight-number");
// quiz answer variables 
var beachBum = document.getElementById("beach-bum");
var adventurer = document.getElementById("adventurer");
var both = document.getElementById("both");
var business = document.getElementById("business");
var pleasure = document.getElementById("pleasure");
var everything = document.getElementById("everything");
var cold = document.getElementById("cold");
var hot = document.getElementById("hot");
var inbetween = document.getElementById("inbetween");

beachBum = false;
adventurer = false;
both = false;
business = false;
pleasure = false;
everything = false; 
cold = false; 
hot = false; 
inbetween = false; 


var flightNum = "";
var flightIata = "";
var airLine = "";
var flightDate = "";
var city = "";
var latitude ="";
var longitude = "";
//var flightUrl = `http://api.aviationstack.com/v1/flights?flight_iata=${flightIata}&access_key=49a287fe1847b2a2d70c2ef5750a2fab`;
var citiesUrl = "http://api.aviationstack.com/v1/cities?latitude&longitude&city_name&access_key=";
var originalUrl = "http://api.aviationstack.com/v1/flights?access_key=55013be62a6b251b0154473a727b8052";
var airlineUrl = "http://api.aviationstack.com/v1/airlines?airline_name&access_key=55013be62a6b251b0154473a727b8052";



flightSearchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    flightSearch.style.display = "none";
    landingPage.style.display = "none";
    userQuizHeader.style.display = "block";
    console.log("Hello!");
    //console.log(flightNumber.value);
    flightIata = flightNumber.value;
    console.log(flightIata);
    getApi(flightIata);
});




submitQuizBtn.addEventListener('click', function (event) {
    beachBum.value =
    adventurer.value = 
    both.value = 
    business.value = 
    pleasure.value = 
    everything.value = 
    cold.value =
    hot.value = 
    inbetween.value = 
    createList(); 
})


//submitQuizBtn.addEventListener('click', function (event) {
    
//})

function getQuizAnswers() {
    
}

function getApi(iata){
    var flightUrl = `http://api.aviationstack.com/v1/flights?flight_iata=${iata}&access_key=49a287fe1847b2a2d70c2ef5750a2fab`;
    console.log(flightUrl);
    fetch(flightUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            console.log(data)
            
         })
         //Date
         .then(function displayFlight(flight){
             console.log(flight)
             flightDate = flight.flight_date
             console.log(flightDate)
            })
          //City  
    // fetch(citiesUrl)
    //     .then(function displayCity(cities){
    //         console.log(cities)
    //         city = cities.city_name
    //         console.log(city)
    //     })
    //     .then(function displayLongitude(longitude){
    //         longitude = longitude.longitude
    //         console.log (longitude)
    //       })
    //     .then(function displayLatitude(latitude){
    //         latitude = latitude.latitude
    //         console.log(latitude)
    //       })

    // fetch(airlineUrl)
    //     .then( function displayAirline(airline){
    //         console.log(airline)
    //         airLine = airline.airline_name  
    //         console.log(airLine)
    //     })
     }
    //getApi();


// function getApi() {
    
//     fetch(flightUrl)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function(data){
//         console.log(data)
//         console.log(data.data[0])
//     displayFlight(data.data[0])
//     displayCity(data.data[0])
//     displayLongitude(data.data[0])
//     displayLatitude(data.data[0])
//     displayAirline(data.data[0])
//       })
//     }
     
//   getApi();
  
//   function displayFlight(flight){
//       console.log(flight)
//       flightDate = flight.flight_date
//       console.log(flightDate)
//   }

//   function displayCity(cities){
//       console.log(cities)
//       city = cities.city_name
//       console.log(city)
//     }

//   function displayLongitude(longitude){
//       longitude = longitude.longitude
//       console.log (longitude)
//     }

//   function displayLatitude(latitude){
//       latitude = latitude.latitude
//       console.log(latitude)
//     }
   
//     function displayAirline(airline){
//         console.log(airline)
//         airLine = airline.airline_name  
//         console.log(airLine) 
    

//     }

//var apiWeatherKey = c99c17905b00b5b873d957ca08c3669d;
var Ktemp;
var temp; 
var weather;

var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=c99c17905b00b5b873d957ca08c3669d';


//function to call weather api, returns either rain or not and the average temperature
function weatherApi(){
    fetch(weatherUrl)
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            Ktemp = data.list[1].main.temp; 
            temp = Math.floor((Ktemp - 273)*(9/5) + 32); 
            weather = data.list[1].weather[0].main;
            console.log(temp);
            console.log(weather);
        })
}


// returns temp and weather which one of the possible returns is rain
weatherApi();
	

// array to hold the items in the packing list
var packingList = [];

function createList(){
  //if the weather forcasts rain
  if(weather == "Rain") {
    packingList.push("rain jacket"); 
  }
  else {
    packingList.push("jacket");
  }
  console.log(packingList);


  //logic statements to create the packing list
  if (hot || inbetween) {
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

  // goes through quiz variables for question 2
  if (business) {
    packingList.push("dress shoes", "slacks", "blazer", "formal top");
  }
  else if (pleasure) {
    packingList.push("flip flops", "going out clothes");
  }
  else {
    packingList.push("dress shoes", "slacks", "blazer", "formal top", "flip flops", "going out clothes");
  }

  // question 1 variables for packing list
  if (beachBum) {
    packingList.push("bathing suit", "flip flops");
  }
  else if (adventurer){
  packingList.push("sneakers", "athletic top", "athletic bottoms");
  }
  else { 
    packingList.push("sneakers", "flip flops", "athletic outfit", "bathing suit");
  }
}


   // for writing to local storage
   localStorage.setItem('packingList', JSON.stringify(packingList))

  // CUSTOM ITEMS:
  
  $("#custom-item-add").click( function() {
    customItemAdd();
    $("body, html").scrollTop( $("#custom-items").offset().top );
  }); 
  
  // Add custom item to the list of generated items.
  function customItemAdd() {
  
    
    event.preventDefault();
  
    
    if ( !$("#custom-items").show() && $("#custom-item-value").val() ) {
      $("#custom-items").show(200);
    }
  
    
    $("#custom-items").css("boxShadow", "0 0 5rem rgba(255,255,0,0.7)");
    $("#custom-items").delay(300).queue(function(){
      $(this).css("boxShadow", "0 0 0rem rgba(255,255,0,0.7)").dequeue();
    });
  
    
    if ( $("#custom-item-value").val() ) {
      customEl = document.createElement("p");
      $(customEl).addClass("subitem");
      $(customEl).text( $("#custom-item-value").val() );
      document.querySelector("#custom-items .value").appendChild( customEl );
      $("#custom-item-value").val('');
      
      checkDone( $(customEl) );
    }
  
  }
 
  
     // for writing to local storage
     localStorage.setItem('list', JSON.stringify(list))
