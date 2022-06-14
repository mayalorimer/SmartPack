


const landingPage = document.getElementById('landing-page');
const flightSearch = document.getElementById('flight-search');
const flightForm = document.getElementById('flight-query');
const flightSearchBtn = document.getElementById('submit-flight-btn');
const userQuizHeader = document.getElementById('user-quiz-header');
const userQuiz = document.getElementById('user-quiz');
const question = document.getElementById('question');
const submitQuizBtn = document.getElementById('submit-quiz-btn');
const list = document.getElementById('packing-list');


var airline = document.getElementById("airline");
var flightNumber = document.getElementById("flight-number");
var departureAirport = document.getElementById("departure-airport");

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
var Ktemp;
var temp; 
var weather;


var flightNum = "";
var flightIata = "";
var airLine = "";
var flightDate = "";
var city = "";
var latitude ="";
var longitude = "";
//var flightUrl = `http://api.aviationstack.com/v1/flights?flight_iata=${flightIata}&access_key=49a287fe1847b2a2d70c2ef5750a2fab`;
var citiesUrl = "http://api.aviationstack.com/v1/cities?latitude&longitude&city_name&access_key=4912d1df2260256904528ba36a474f20";
var originalUrl = "http://api.aviationstack.com/v1/flights?access_key=4912d1df2260256904528ba36a474f20";
var airlineUrl = "http://api.aviationstack.com/v1/airlines?airline_name&access_key=4912d1df2260256904528ba36a474f20";



flightSearchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    flightSearch.style.display = "none";
    landingPage.style.display = "none";
    userQuizHeader.style.display = "block";
    console.log("Hello!");
    //console.log(flightNumber.value);
    flightNum = flightNumber.value;
    flightIata = departureAirport.value;
    console.log(flightIata);
    getApi(flightNum, flightIata);
});




submitQuizBtn.addEventListener('click', function (event) {
  event.preventDefault(); 
/*     beachBum.value =
    adventurer.value = 
    both.value = 
    business.value = 
    pleasure.value = 
    everything.value = 
    cold.value =
    hot.value = 
    inbetween.value =  */
  createList(); 
  displayStorage();
})


//submitQuizBtn.addEventListener('click', function (event) {
    
//})

function getQuizAnswers() {
    
}

function getApi(num, iata){
    var flightUrl = `http://api.aviationstack.com/v1/flights?flight_iata=${num}&dep_iata=${iata}&access_key=4912d1df2260256904528ba36a474f20`;
    console.log(flightUrl);
    fetch(flightUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            console.log(data)
            var arrivalIata = data.data[0].arrival.iata 
            console.log(arrivalIata);
            getLatLon(arrivalIata);   
         })
         //Date
        //  .then(function displayFlight(flight){
        //      console.log(flight)
        //      flightDate = flight.flight_date
        //      console.log(flightDate)
        //     })
        //   //City  
    
function getLatLon(arrIata) {
    var latLongUrl = `https://airlabs.co/api/v9/airports?iata_code=${arrIata}&api_key=b6cd1a32-4676-4ba7-b3c5-48da35d6e7cf`
    console.log(latLongUrl);
    fetch(latLongUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            console.log(data)
        var lat = data.response[0].lat    
        var lng = data.response[0].lng
        console.log(lat, lng);
        weatherApi(lat, lng);
        });
}


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



//function to call weather api, returns either rain or not and the average temperature
function weatherApi(latitude, longitude){
    var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=c99c17905b00b5b873d957ca08c3669d';
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
        packingList.push("long pants", "long sleeve shirt", "sweater", "winter jacket", "closed toe shoes", "base layer shirt ");
    }
    else if (temp >= 50 && temp < 65) {
        packingList.push("long pants", "long sleeve shirt", "light jacket ");
    }
    else if (temp >= 65 && temp < 75) {
        packingList.push("shorts", "short sleeves", "light jacket "); 
    }
    else {
        packingList.push("shorts", "short sleeves", "t-shirt", "sandals ");
    }
  } 
  //if you run cold
  else {
    if (temp < 50) {
        packingList.push("long pants", "long sleeve shirt", "sweater", "winter jacket", "closed toe shoes", "base layer shirt ");
    }
    else if (temp >= 50 && temp < 65) {
        packingList.push("long pants", "long sleeve shirt", "moderate jacket ");
    }
    else if (temp >= 65 && temp < 75) {
        packingList.push("long pants", "short sleeves", "long sleeves", "light jacket "); 
    }
    else {
        packingList.push("shorts", "short sleeves", "t-shirt", "sandals", "light jacket ");
    }
  }

  // goes through quiz variables for question 2
  if (business) {
    packingList.push("dress shoes", "slacks", "blazer", "formal top ");
  }
  else if (pleasure) {
    packingList.push("flip flops", "going out clothes ");
  }
  else {
    packingList.push("dress shoes", "slacks", "blazer", "formal top", "flip flops", "going out clothes ");
  }

  // question 1 variables for packing list
  if (beachBum) {
    packingList.push("bathing suit", "flip flops ");
  }
  else if (adventurer){
  packingList.push("sneakers", "athletic top", "athletic bottoms ");
  }
  else { 
    packingList.push("sneakers", "flip flops", "athletic outfit", "bathing suit ");
  }

  // adds to local storage
localStorage.setItem('packingList', JSON.stringify(packingList))

}


var scoreList = document.querySelector(".list");
     //prints the stored list to the page
function displayStorage(){
  var storedPackingList = JSON.parse(localStorage.getItem("packingList"));
  console.log(storedPackingList); 
  //loops through the array and prints the scores
  for (var i = 0; i < storedPackingList.length; i++){
    //unsure on this for adding it to the page 
    scoreList.textContent += '<li>' + storedPackingList[i] + '</li>';
  }
}
// console.log(packingList);
//    // for writing to local storage
//    localStorage.setItem('packingList', JSON.stringify(packingList))

//    document.getElementById("results").innerHTML = localStorage.getItem("packingList");

  // CUSTOM ITEMS:
  
//   $("#custom-item-add").click( function() {
//     customItemAdd();
//     $("body, html").scrollTop( $("#custom-items").offset().top );
//   }); 
  
//   // Add custom item to the list of generated items.
//   function customItemAdd() {
  
    
//     event.preventDefault();
  
    
//     if ( !$("#custom-items").show() && $("#custom-item-value").val() ) {
//       $("#custom-items").show(200);
//     }
  
    
//     $("#custom-items").css("boxShadow", "0 0 5rem rgba(255,255,0,0.7)");
//     $("#custom-items").delay(300).queue(function(){
//       $(this).css("boxShadow", "0 0 0rem rgba(255,255,0,0.7)").dequeue();
//     });
  
    
//     if ( $("#custom-item-value").val() ) {
//       customEl = document.createElement("p");
//       $(customEl).addClass("subitem");
//       $(customEl).text( $("#custom-item-value").val() );
//       document.querySelector("#custom-items .value").appendChild( customEl );
//       $("#custom-item-value").val('');
      
//       checkDone( $(customEl) );
//     }
  
  
 
  
     // for writing to local storage
//     localStorage.setItem('list', JSON.stringify(list))