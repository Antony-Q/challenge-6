// var getWeatherAPI = function(user) {
//     // format the weather dashboard api url
//     var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,alerts,hourly,daily&appid=c6c3742f8d69c2897e68da43607165dc";

//     // make a get request to url
//     fetch(apiUrl).then(function(response) {
//       console.log(response);
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     });
//   };


$(document).ready(function () {

    //

    
    // Defining async function
    async function getWeatherAPI(lat, lon) {
        const api_url =
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,hourly&appid=c6c3742f8d69c2897e68da43607165dc`;
        // Storing response
        const response = await fetch(api_url);
        
        // Storing data in form of JSON
        var data = await response.json();
        console.log(data);

        // Display data in designated html elements
        $('.data-point-1').html(`<div>Temp: ${data.current.temp}</div>`)
        $('.data-point-2').html(`<div>Feel like: ${data.current.feels_like}</div>`)
        $('.data-point-3').html(`<div>Pressure: ${data.current.pressure}</div>`)
        $('.data-point-4').html(`<div>Day4 wind speed: ${data.daily[4].wind_speed}</div>`)
    }
    
    // Variables for search query DOM
    var searchFormEl = document.querySelector("#form-search");
    var searchInputEl = document.querySelector("#input-search");

    // Function for form submission browser event
    var formSubmitHandler = function (event) {
        event.preventDefault();
        var searchCity = searchInputEl.value.trim();
        console.log(searchCity);
        fetchCoords(searchCity);
    };
    searchFormEl.addEventListener("submit", formSubmitHandler);

    async function fetchCoords(city) {
        var searchCityAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6c3742f8d69c2897e68da43607165dc`;
        const response = await fetch(searchCityAPI);

        // Storing data in form of JSON
        var data = await response.json();
        console.log(data);
        getWeatherAPI(data.coord.lat, data.coord.lon);
    }
});





