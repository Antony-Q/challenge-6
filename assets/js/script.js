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
  
const api_url = 
      "https://api.openweathermap.org/data/2.5/onecall?lat=30.27&lon=-97.74&exclude=minutely,alerts,hourly&appid=c6c3742f8d69c2897e68da43607165dc";
  
// Defining async function
async function getWeatherAPI(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
    }
}
  
  getWeatherAPI(api_url);



  // Variables for search query DOM
  var searchFormEl = document.querySelector("#form-search");
  var searchInputEl = document.querySelector("#input-search");

  // Function for form submission browser event
  var formSubmitHandler = function(event) {
      event.preventDefault();
      console.log(event);
  };
  searchFormEl.addEventListener("submit", formSubmitHandler);