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

  
  

    
    
   