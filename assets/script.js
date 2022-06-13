const landingPage = document.getElementById('landing-page');
const flightSearch = document.getElementById('flight-search');
const flightForm = document.getElementById('flight-query');
const flightSearchBtn = document.getElementById('submit-flight-btn');
const userQuizHeader = document.getElementById('user-quiz-header');
const userQuiz = document.getElementById('user-quiz');
const question = document.getElementById('question');

var airline = document.getElementById("#airline");
var flightNumber = document.getElementById("#flight-number");


var flightNum = "";
var airLine = "";
var city = "";
var latitude ="";
var longitude = "";
var flightUrl = `http://api.aviationstack.com/v1/flights?flight_number=${flightNum}&access_key=b81bbd6e9e08b5b35d5b230175c9425c`;
var citiesUrl = "http://api.aviationstack.com/v1/cities?latitude&longitude&city_name&access_key=b81bbd6e9e08b5b35d5b230175c9425c";
var originalUrl = "http://api.aviationstack.com/v1/flights?access_key=b81bbd6e9e08b5b35d5b230175c9425c";
var airlineUrl = "http://api.aviationstack.com/v1/airlines?airline_name&access_key=b81bbd6e9e08b5b35d5b230175c9425c";


flightSearchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    getApi();
    flightSearch.style.display = "none";
    landingPage.style.display = "none";
    userQuizHeader.style.display = "block";
});

// function getApi() {


function getApi(){
    fetch(flightUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.data[0].airline)
        

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


//var apiWeatherKey = c99c17905b00b5b873d957ca08c3669d;
var lat = 51.5880;
var long = 19.7496;
var Ktemp;
var temp; 
var weather;


var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&appid=c99c17905b00b5b873d957ca08c3669d';


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


if (business) {
    packingList.push("dress shoes", "slacks", "blazer", "formal top");
}


if (beach-bum) {
    packingList.push("bathing suit", "flip flops");
}
else if (keepItPushing){
  packingList.push("sneakers", "athletic top", "athletic bottoms");
}
else { // added it together -jess
    packingList.push("sneakers", "flip flops", "athletic outfit", "bathing suit");
}


$(document).ready(function() {

  // EVENT HANDLERS:

  // $("#button-start").click(function() {
  //   $('#page-start').hide(200);
  //   $('#page1').show(200);
  // });
  
  
  $("#button-generate").click(function() {
    $('#page1').hide(200);
    $('#page-list').show(200);
    updateVars();
    refineElements();
  });
  
  // $("#button-startover").click(function() {
  //   $('#custom-items .value').children().remove();
  //   $('#custom-items').hide(200);
  //   $('#page-list').hide(200);
  //   $('#page-start').show(200);
  });
    
    
    
  // CREATING LIST: 
    
  var dataObject = {
    "Business": [
      "dress shoes",
      "slacks",
      "blazer",
      "formal top",
    ],
    "keepItPushing": [
      "sneakers",
      "athletic top",
      "athletic bottoms",
    ],
    "relax": [
      "bathing suit",
      "flip flops",
    ],
    "bothRelaxAndPush": [
      "sneakers",
      "flip flops",
      "athletic outfit",
      "bathing suit",
    ],
    "RunHot Option 1": [
      "long pants",
      "long sleeve shirt",
      "sweater",
      "winter jacket",
      "closed toe shoes",
      "base layer shirt",
    ],
    "RunHot Option 2": [
      "long pants",
      "long sleeve shirt",
      "light jacket",
    ],
    "RunHot Option 3": [
      "shorts",
      "short sleeves",
      "light jacket",
    ],
    "RunHot Option 4": [
      "shorts",
      "short sleeves",
      "t-shirt",
      "sandals",
    ],
    "RunCold Option 1": [
      "long pants",
      "long sleeve shirt",
      "sweater",
      "winter jacket",
      "closed toe shoes",
      "base layer shirt",
    ],
    "RunCold Option 2":[
      "long pants",
      "long sleeve shirt",
      "moderate jacket",
    ],
    "RunCold Option 3":[
      "long pants",
      "short sleeves",
      "long sleeves",
      "light jacket",
    ],
    "RunCold Option 4":[
      "shorts",
      "short sleeves",
      "sandals",
      "light jacket"
    ]
  }
  
  
  
  
  createElements(dataObject);
    
  function createElements(data) {
    
    var list = document.getElementById("page-list");
    
    
    $.each(data, function(index, value) {
      var ElLabel, ElValue, wrap;
      ElLabel = document.createElement("P");
      ElValue = document.createElement("P");
      wrap = document.createElement("P");
      $(ElLabel).addClass("list-item-label");
      $(ElValue).addClass("value");
      $(wrap).addClass("wrap");
      $(wrap).attr('id', index);
      
     
      if ( $.isArray(value) ) {
        ElLabel.innerHTML = index;
        ElValue.innerHTML = "";
        
        value.forEach(function(index) {
          var ElItem = document.createElement("P");
          $(ElItem).addClass("subitem");
          ElItem.innerHTML = index;
          $(ElItem).attr('id', index);
          ElValue.appendChild(ElItem);
        });
        
      } else {
        ElLabel.innerHTML = index;
        ElValue.innerHTML = value;
      }
      
      wrap.appendChild(ElLabel);
      wrap.appendChild(ElValue);
      list.appendChild(wrap);
      
    });
  }
  
  var weather1 = false;
  var weather2 = false;
  var weather3 = false;
  var weather4 = false;

  function refineElements() {
  
    if ( weather1 && business === 0 ) {
      $("[id='business']").show();
      $("[id='RunHot Option 1']").show();
    } else if ( weather2 && business > 0 ) {
    } else if ( weather3 && business > 0 ) {; 
    } else {
    }

    if ( weather1 && keepItPushing === 0 ) {

    } else if ( weather2 && keepItPushing > 0 ) {

    } else if ( weather3 && keepItPushing > 0 ) {

    } else {

    }
  
    if ( weather1 && relax === 0 ) {
 
    } else if ( weather2 && relax > 0 ) {

    } else if ( weather3 && relax > 0 ) {
 
    } else {

    }
    if ( weather1 && bothRelaxAndPush === 0 ) {

    } else if ( weather2 && bothRelaxAndPush > 0 ) {
  
    } else if ( weather3 && bothRelaxAndPush > 0 ) {
    
    } else {

    }
  
  $("#list-print-list").click(function() {
    var printableList = [];
    var totalShown = $(".subitem:visible");
  
    $.each( totalShown, function(index, value) {
      printableList.push( $(value).text() );
    });
  
    $("#print-list").show(200);
    $("#print-list textarea").text(printableList.join("\n"));
  });
  
  
  
  $("#print-list textarea").focus( function() {
    this.select();
    document.execCommand("copy");
    $("#copy-confirm").show();
    $("#copy-confirm").css("opacity", "1");
    $("#copy-confirm").delay(1000).queue(function(){
      $(this).css("opacity", "0").dequeue();
      $(this).hide(300).dequeue;
    });
  });
  
  
  
  
  // LIST FUNCTIONALITY:
    
    
  
  $('body').on('click', '.subitem', function() {
    $(this).toggleClass("done");
    checkDone( $(this) );
  });
  
  
  
  function checkDone(thisElement) {
  
    var numDone = thisElement.parent().find( $(".done") ).length;
    var numShown = thisElement.parent().find( ":visible" ).length;
  
    if ( numDone === numShown ) {
      thisElement.closest( $(".wrap") ).fadeTo("fast", 0.5);
    } else {
      thisElement.closest( $(".wrap") ).fadeTo("fast", 1);
    }
  
  }
  
  
  
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
  
  
  
  
  };

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
