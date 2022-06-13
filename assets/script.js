const landingPage = document.getElementById('landing-page');
const flightSearch = document.getElementById('flight-search');
const flightForm = document.getElementById('flight-query');
const flightSearchBtn = document.getElementById('submit-flight-btn');
const userQuizHeader = document.getElementById('user-quiz-header');
const userQuiz = document.getElementById('user-quiz');
const question = document.getElementById('question');
const submitQuizBtn = document.getElementById('submit-quiz-btn');


//Fetting the ids for the airlines
const alaskaAirlines = document.getElementById('ASA');
const americanAirlines = document.getElementById('AAL');
const DeltaAirlines = document.getElementById('DAL');
const hawaiianAirlines = document.getElementById('HAL');
const jetBlue = document.getElementById('JBU');
const southwestAirlines= document.getElementById('SWA');
const spiritAirlines = document.getElementById('NKS');
const unitedAirlines = document.getElementById('UAL');



var airline = document.getElementById("#airline");
var flightNumber = document.getElementById("#flight-number");

var flightDate = document.getElementById("#flight-date");



//var apiWeatherKey = c99c17905b00b5b873d957ca08c3669d;
var lat = 51.5880;
var long = 19.7496;
var Ktemp;
var temp; 
var weather;

var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&appid=c99c17905b00b5b873d957ca08c3669d';

var beachBum = document.getElementById("#beach-bum");
var adventurer = document.getElementById("#adventurer");
var both = document.getElementById("#both");
var business = document.getElementById("#business");
var pleasure = document.getElementById("#pleasure");
var everything = document.getElementById("#everything");
var cold = document.getElementById("#cold");
var hot = document.getElementById("#hot");
var inbetween = document.getElementById("#inbetween");


var flightNum = "";
var airLine = "";
var flightDate = "";
var city = "";
var latitude ="";
var longitude = "";

var iataCode = "";
var icaoCode ="";


flightForm.addEventListener('submit', function (event) {
    event.preventDefault;
    flightNum = flightNumber.textContent;
    console.log(flightNum);
    console.log("hello");

var flightUrl = `http://api.aviationstack.com/v1/flights?flight_number=${flightNum}&access_key=55013be62a6b251b0154473a727b8052`;
var citiesUrl = "http://api.aviationstack.com/v1/cities?latitude&longitude&city_name&access_key=55013be62a6b251b0154473a727b8052";
var originalUrl = "http://api.aviationstack.com/v1/flights?access_key=55013be62a6b251b0154473a727b8052";
var airlineUrl = "http://api.aviationstack.com/v1/airlines?airline_name&access_key=55013be62a6b251b0154473a727b8052";



flightSearchBtn.addEventListener('click', function(event) {
    event.preventDefault();

    flightSearch.style.display = "none";
    landingPage.style.display = "none";
    userQuizHeader.style.display = "block";
    getApi();
});




submitQuizBtn.addEventListener('click', function (event) {
    createList(); 
})


//submitQuizBtn.addEventListener('click', function (event) {
    
//})

function getQuizAnswers() {
    
}

function getApi(){
    fetch(flightUrl)

    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        console.log(data.data[1].airline.iata)
        console.log(data.data[1].airline.icao)
        //iataCode = data.data.airline.iata;
        //icaoCode = data.data.airline.icao;
    })
}

function getLogitudeandLatitude(){
    fetch(citiesUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.data[1].longitude)
        console.log(data.data[1].latitude)
        //lat = data.data.longitude;
        //lon = data.data.latitude;
    })
}



        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            console.log(data)
            console.log(data.data[0])
         })
         //Date
         .then(function displayFlight(flight){
             console.log(flight)
             flightDate = flight.flight_date
             console.log(flightDate)
            })
          //City  
    fetch(citiesUrl)
        .then(function displayCity(cities){
            console.log(cities)
            city = cities.city_name
            console.log(city)
        })
        .then(function displayLongitude(longitude){
            longitude = longitude.longitude
            console.log (longitude)
          })
        .then(function displayLatitude(latitude){
            latitude = latitude.latitude
            console.log(latitude)
          })

    fetch(airlineUrl)
        .then( function displayAirline(airline){
            console.log(airline)
            airLine = airline.airline_name  
            console.log(airLine)
        })
    }
    getApi();



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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const userQuizHeader = document.getElementById("userQuizHeader");//////
// const landingPage = document.getElementById("landing-page");
// const flightSearch = document.getElementById("flight-search");
// const flightForm = document.getElementById("flight-query");
// const userQuizHeader = document.getElementById("user-quiz-header");///////
// const userQuiz = document.getElementById("user-quiz");
// const question = document.getElementById("question");
// const answerA = document.getElementById("a");
// const answerB = document.getElementById("b");
// const answerC = document.getElementById("c");



// //var apiWeatherKey = c99c17905b00b5b873d957ca08c3669d;
// var lat = 51.5880;
// var long = 19.7496;
// var Ktemp;
// var temp; 
// var weather;

// var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&appid=c99c17905b00b5b873d957ca08c3669d';

// function weatherApi(){
//     fetch(weatherUrl)
//         .then(function(response){
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             Ktemp = data.list[1].main.temp; 
//             temp = Math.floor((Ktemp - 273)*(9/5) + 32); 
//             weather = data.list[1].weather[0].main;
//             console.log(temp);
//             console.log(weather);
//         })
// }


// // returns temp and weather which one of the possible returns is rain
// weatherApi();

// // array to hold the items in the packing list
// var packingList = [];
// //if the weather forcasts rain
// if(weather == "Rain") {
//     packingList.push("rain jacket"); 
// }
// else {
//     packingList.push("jacket");
// }
// console.log(packingList);


    



// function weatherApi(){
//     fetch(weatherUrl)
//         .then(function(response){
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             Ktemp = data.list[1].main.temp; 
//             temp = Math.floor((Ktemp - 273)*(9/5) + 32); 
//             weather = data.list[1].weather[0].main;
//             console.log(temp);
//             console.log(weather);
//         })
// }


// // returns temp and weather which one of the possible returns is rain
// weatherApi();

// // array to hold the items in the packing list
// var packingList = [];
// //if the weather forcasts rain
// if(weather == "Rain") {
//     packingList.push("rain jacket"); 
// }
// else {
//     packingList.push("jacket");
// }
// console.log(packingList);



// //if (runHot) {
//     if (temp < 50) {
//         packingList.push("long pants", "long sleeve shirt", "sweater", "winter jacket", "closed toe shoes", "base layer shirt");
//     }
//     else if (temp >= 50 && temp < 65) {
//         packingList.push("long pants", "long sleeve shirt", "light jacket");
//     }
//     else if (temp >= 65 && temp < 75) {
//         packingList.push("shorts", "short sleeves", "light jacket"); 
//     }
//     else {
//         packingList.push("shorts", "short sleeves", "t-shirt", "sandals");
//     }
/*}
//if you run cold
else {

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

/*
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



// Custom list

// $("#custom-item-add").click( function() {
// 	customItemAdd();
// 	$("body, html").scrollTop( $("#custom-items").offset().top );
// }); 


// // Add custom item to the list of generated items.
// function customItemAdd() {

// 	// prevent default
// 	event.preventDefault();

// 	// Show the custom-items wrap div 
// 	if ( !$("#custom-items").show() && $("#custom-item-value").val() ) {
// 		$("#custom-items").show(200);
// 	}

// 	// make the div glow 
// 	$("#custom-items").css("boxShadow", "0 0 5rem rgba(255,255,0,0.7)");
// 	$("#custom-items").delay(300).queue(function(){
// 		$(this).css("boxShadow", "0 0 0rem rgba(255,255,0,0.7)").dequeue();
// 	});

// 	// create a new subitem in that div, give it the value from the custom-item-value box. Clear that box. Check to see if custom-items is all checked off (because it isn't, because we JUST added something, so this will reset it)
// 	if ( $("#custom-item-value").val() ) {
// 		customEl = document.createElement("p");
// 		$(customEl).addClass("subitem");
// 		$(customEl).text( $("#custom-item-value").val() );
// 		document.querySelector("#custom-items .value").appendChild( customEl );
// 		$("#custom-item-value").val('');

// Add custom item to the list of generated items.
function customItemAdd() {

	// prevent default
	event.preventDefault();

	// Show the custom-items wrap div 
	if ( !$("#custom-items").show() && $("#custom-item-value").val() ) {
		$("#custom-items").show(200);
	}

	// make the div glow 
	$("#custom-items").css("boxShadow", "0 0 5rem rgba(255,255,0,0.7)");
	$("#custom-items").delay(300).queue(function(){
		$(this).css("boxShadow", "0 0 0rem rgba(255,255,0,0.7)").dequeue();
	});

	// create a new subitem in that div, give it the value from the custom-item-value box. Clear that box. Check to see if custom-items is all checked off (because it isn't, because we JUST added something, so this will reset it)
	if ( $("#custom-item-value").val() ) {
		customEl = document.createElement("p");
		$(customEl).addClass("subitem");
		$(customEl).text( $("#custom-item-value").val() );
		document.querySelector("#custom-items .value").appendChild( customEl );
		$("#custom-item-value").val('');

		
// 		checkDone( $(customEl) );
// 	}

// }


// localStorage.setItem("itemsName", "value");
// localStorage.getItem("itemsName")
// localStorage.removeItem("itemsname")
// localStorage.clear()

// sessionStorage.setItem("itemname", "value") // saves the data in the item
// sessionStorage.getItem("itemname")          // get the data in the item
// sessionStorage.removeItem("itemname")       // removes the item
// sessionStorage.clear()                      // removes all items

// let name = localStorage.getItem('itemsName');
// alert('Items' + itemsName);
*/

  }

  // goes through quiz variables to add more items to the list
  if (business) {
    packingList.push("dress shoes", "slacks", "blazer", "formal top");
  }

  if (beach-bum) {
    packingList.push("bathing suit", "flip flops");
  }
  else if (keepItPushing){
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

