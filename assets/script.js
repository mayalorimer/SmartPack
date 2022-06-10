const userQuizHeader = document.getElementById("userQuizHeader");
const landingPage = document.getElementById("landing-page");
const flightSearch = document.getElementById("flight-search");
const flightForm = document.getElementById("flight-query");
const userQuizHeader = document.getElementById("user-quiz-header");
const userQuiz = document.getElementById("user-quiz");
const question = document.getElementById("question");
const answerA = document.getElementById("a");
const answerB = document.getElementById("b");
const answerC = document.getElementById("c");

userQuizHeader.addEventListener('click',)


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

/*
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

*/

