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
    const api_url =
        "https://api.openweathermap.org/data/2.5/onecall?lat=30.27&lon=-97.74&exclude=minutely,alerts,hourly&appid=c6c3742f8d69c2897e68da43607165dc";

    // Defining async function
    async function getWeatherAPI(url) {
        // Storing response
        const response = await fetch(url);

        // Storing data in form of JSON
        var data = await response.json();
        console.log(data);
        $('.data-point-1').html(`<div>Temp: ${data.current.temp}</div>`)
        $('.data-point-2').html(`<div>Feel like: ${data.current.feels_like}</div>`)
        $('.data-point-3').html(`<div>Pressure: ${data.current.pressure}</div>`)
        $('.data-point-4').html(`<div>Day4 wind speed: ${data.daily[4].wind_speed}</div>`)
    }

    getWeatherAPI(api_url);

    // document.body.onload = addElement;

    // function addElement () {
    //   // create a new div element
    //   const newDiv = document.createElement("div");
    
    //   // and give it some content
    //   const newContent = document.createTextNode("Hi there and greetings!");
    
    //   // add the text node to the newly created div
    //   newDiv.appendChild(newContent);
    
    //   // add the newly created element and its content into the DOM
    //   const currentDiv = document.getElementById("div1");
    //   document.body.insertBefore(newDiv, currentDiv);
    // }

    
    // Variables for search query DOM
    var searchFormEl = document.querySelector("#form-search");
    var searchInputEl = document.querySelector("#input-search");

    // Function for form submission browser event
    var formSubmitHandler = function (event) {
        event.preventDefault();
        console.log(event);
    };
    searchFormEl.addEventListener("submit", formSubmitHandler);
});




