

// Custom list

$("#custom-item-add").click( function() {
	customItemAdd();
	$("body, html").scrollTop( $("#custom-items").offset().top );
}); 

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
		
		checkDone( $(customEl) );
	}

}






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
