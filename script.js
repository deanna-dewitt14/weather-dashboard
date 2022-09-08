//VARIABLES
var searchInput = document.querySelector('#searchInput');
var currentCity = document.querySelector('#currentCity');
var currentTemp = document.querySelector('#currentTemp');
var currentWind = document.querySelector('#currentWind');
var currentHumidity = document.querySelector('#currentHumidity');
var currentUVI = document.querySelector('#currentUVI');
var dayOneDate = document.querySelector('#dayOneDate');
var dayOneIcon = document.querySelector('#dayOneIcon');
var dayOneTemp = document.querySelector('#dayOneTemp');
var dayOneWind = document.querySelector('#dayOneWind');
var dayOneHumidity = document.querySelector('#dayOneHumidity');
var dayTwoDate = document.querySelector('#dayTwoDate');
var dayTwoIcon = document.querySelector('#dayTwoIcon');
var dayTwoTemp = document.querySelector('#dayTwoTemp');
var dayTwoWind = document.querySelector('#dayTwoWind');
var dayTwoHumidity = document.querySelector('#dayTwoHumidity');
var dayThreeDate = document.querySelector('#dayThreeDate');
var dayThreeIcon = document.querySelector('#dayThreeIcon');
var dayThreeTemp = document.querySelector('#dayThreeTemp');
var dayThreeWind = document.querySelector('#dayThreeWind');
var dayThreeHumidity = document.querySelector('#dayThreeHumidity');
var dayFourDate = document.querySelector('#dayFourDate');
var dayFourIcon = document.querySelector('#dayFourIcon');
var dayFourTemp = document.querySelector('#dayFourTemp');
var dayFourWind = document.querySelector('#dayFourWind');
var dayFourHumidity = document.querySelector('#dayFourHumidity');
var dayFiveDate = document.querySelector('#dayFiveDate');
var dayFiveIcon = document.querySelector('#dayFiveIcon');
var dayFiveTemp = document.querySelector('#dayFiveTemp');
var dayFiveWind = document.querySelector('#dayFiveWind');
var dayFiveHumidity = document.querySelector('#dayFiveHumidity');


// subtract 9hrs from datetime

//FUNCTIONS

//Fetch Weather From API => Pass to populateDisplay
function getWeather () {
	if (searchInput.value.length == 0) {
		alert("Please Enter a Valid Value")
		return;
	}
	var weatherApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + searchInput.value + '&APPID=5a28a2ac781ee5c93e1660eb475b3f44&units=imperial';
	fetch(weatherApiUrl).then(function (response) {
		if (response.ok) {
		  response.json().then(function (data) {
			populateDisplay(data);
		  });
		} else {
			alert("Error! Invalid Input, Please Try Again")
		}
	  });
}
//Inject All Data Passed Into Elements
function populateDisplay(data) {

	//Populate Current Weather
	var currentWeather = data.list[0];
	
	currentCity.innerHTML =
	data.city.name +
	" " +
	currentWeather.dt_txt.substr(0,10) +
	" " +
	getWeatherIcon(currentWeather.weather[0].icon);

	currentTemp.innerHTML = "Temp: " + currentWeather.main.temp + " ℉";
	currentWind.innerHTML = "Wind: " + currentWeather.wind.speed + " MPH";
	currentHumidity.innerHTML = "Humidity: " + currentWeather.main.humidity;
	populateUVI(currentUVI,currentWeather.main.feels_like);

	//Day One
	var dayOne = data.list[8];
	dayOneDate.innerHTML = dayOne.dt_txt.substr(0,10);
	dayOneIcon.innerHTML = getWeatherIcon(dayOne.weather[0].icon);
	dayOneTemp.innerHTML = "Temp: " + dayOne.main.temp + " ℉";
	dayOneWind.innerHTML = "Wind: " + dayOne.wind.speed + " MPH";
	dayOneHumidity.innerHTML = "Humidity: " + dayOne.main.humidity; 	
	
	//Day Two
	var dayTwo = data.list[16];
	dayTwoDate.innerHTML = dayTwo.dt_txt.substr(0,10);
	dayTwoIcon.innerHTML = getWeatherIcon(dayOne.weather[0].icon);
	dayTwoTemp.innerHTML = "Temp: " + dayTwo.main.temp + " ℉";
	dayTwoWind.innerHTML = "Wind: " + dayTwo.wind.speed + " MPH";
	dayTwoHumidity.innerHTML = "Humidity: " + dayTwo.main.humidity;

	//Day Three
	var dayThree = data.list[24];
	dayThreeDate.innerHTML = dayThree.dt_txt.substr(0,10);
	dayThreeIcon.innerHTML = getWeatherIcon(dayOne.weather[0].icon);
	dayThreeTemp.innerHTML = "Temp: " + dayThree.main.temp + " ℉";
	dayThreeWind.innerHTML = "Wind: " + dayThree.wind.speed + " MPH";
	dayThreeHumidity.innerHTML = "Humidity: " + dayThree.main.humidity;

	//Day Four
	var dayFour = data.list[32];
	dayFourDate.innerHTML = dayFour.dt_txt.substr(0,10);
	dayFourIcon.innerHTML = getWeatherIcon(dayOne.weather[0].icon);
	dayFourTemp.innerHTML = "Temp: " + dayFour.main.temp + " ℉";
	dayFourWind.innerHTML = "Wind: " + dayFour.wind.speed + " MPH";
	dayFourHumidity.innerHTML = "Humidity: " + dayFour.main.humidity;

	//Day Five
	var dayFive = data.list[39];
	dayFiveDate.innerHTML = dayFive.dt_txt.substr(0,10);
	dayFiveIcon.innerHTML = getWeatherIcon(dayOne.weather[0].icon);
	dayFiveTemp.innerHTML = "Temp: " + dayFive.main.temp + " ℉";
	dayFiveWind.innerHTML = "Wind: " + dayFive.wind.speed + " MPH";
	dayFiveHumidity.innerHTML = "Humidity: " + dayFive.main.humidity;

	console.table(data);
}

// Populates UV value and color, used feels like temp because API did not have UVI
function populateUVI(HTMLelement,UVI) {

		if (UVI < 33) {
			HTMLelement.innerHTML = UVI; 
			HTMLelement.style.backgroundColor = "darkred";
		} else if ( UVI < 66) {
			HTMLelement.innerHTML = UVI;
			HTMLelement.style.backgroundColor = "darkgoldenrod";
		} else {
			HTMLelement.innerHTML = UVI;
			HTMLelement.style.backgroundColor = "darkgreen";
		}
}

function getWeatherIcon(iconCode) {
	var url = 'https://openweathermap.org/img/wn/' + iconCode + '@2x.png';
	return '<img src="' + url + '" alt="Weather Icon">'
}