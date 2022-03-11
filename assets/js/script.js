fetch("https://api.github.com/users/Antony-Q/repos").then(function(response) {
  response.json().then(function(data) {
    console.log(data);
  });
});

console.log("outside");