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
$(document).ready(function(){

const api_url = 
      "https://api.openweathermap.org/data/2.5/onecall?lat=30.27&lon=-97.74&exclude=minutely,alerts,hourly&appid=c6c3742f8d69c2897e68da43607165dc";
  
// Defining async function
async function getWeatherAPI(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
}
  
  getWeatherAPI(api_url);

// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>dt</th>
          <th>sunrise</th>
          <th>sunset</th>
          <th>temp</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.current) {
        tab += `<tr> 
    <td>${r.dt} </td>
    <td>${r.sunrise}</td>
    <td>${r.sunset}</td> 
    <td>${r.temp}</td>          
</tr>`;
    }

show(data);

    // Setting innerHTML as tab variable
    document.getElementById("current-weather-id").innerHTML = tab;
}});





  // Variables for search query DOM
  var searchFormEl = document.querySelector("#form-search");
  var searchInputEl = document.querySelector("#input-search");

  // Function for form submission browser event
  var formSubmitHandler = function(event) {
      event.preventDefault();
      console.log(event);
  };
  searchFormEl.addEventListener("submit", formSubmitHandler);