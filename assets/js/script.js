// JQuery initialization
$(document).ready(function () {

    // Defining async function
    async function getWeatherAPI(lat, lon) {
        const api_url =
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,hourly&appid=c6c3742f8d69c2897e68da43607165dc`;
        // Storing response
        const response = await fetch(api_url);

        // Storing data in form of JSON
        var data = await response.json();
        console.log(data);

        // Display data in designated html elements using second API request
        $('.data-point-1').html(`<div>Temp: ${data.current.temp}</div>`)
        $('.data-point-2').html(`<div>Wind: ${data.current.wind_speed}</div>`)
        $('.data-point-3').html(`<div>Humidity: ${data.current.humidity}</div>`)
        $('.data-point-4').html(`<div>UV Index: ${data.current.uvi}</div>`)
    };

    // Variables for search query DOM
    var searchFormEl = document.querySelector("#form-search");
    var searchInputEl = document.querySelector("#input-search");

    // Function for form submission event
    var formSubmitHandler = function (event) {
        event.preventDefault();
        var searchCity = searchInputEl.value.trim();
        console.log(searchCity);
        fetchCoords(searchCity);
    };
    searchFormEl.addEventListener("submit", formSubmitHandler);

    // Defining async function for variable input submission
    async function fetchCoords(city) {
        var searchCityAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6c3742f8d69c2897e68da43607165dc`;
        const response = await fetch(searchCityAPI);

        // Storing data in form of JSON
        var data = await response.json();
        console.log(data);
        getWeatherAPI(data.coord.lat, data.coord.lon);

        // Live time function
        var liveDate = document.getElementById("currentDate");

        document.getElementById("currentDate").innerHTML =
            `${moment().format('L')}`;

        setInterval(function () { liveDate.innerHTML = `${moment().format('L')}` }, 1000);

        // Display data in designated html elements using first API request
        $('.city-name').html(`<div>${data.name}${data.weather[0].icon}</div>`)
    }
});



