//Use the [OpenWeather One Call API](https://openweathermap.org/api/one-call-api) to retrieve weather data for cities. Read through the documentation for setup and usage instructions. You will use `localStorage` to store any persistent data.
init ();


function init () {
	var apiUrl = 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5a28a2ac781ee5c93e1660eb475b3f44';

	fetch(apiUrl).then(function (response) {
	  if (response.ok) {
		console.log('response ok: '+ JSON.stringify(response));
	  } else {
		console.log('response not ok: '+ JSON.stringify(response));
	  }
	});
}