// Random number generator function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Randomly grab a number(0-8)
var getRandomPageNumber = getRandomInt(9);

// Fetch the Star Wars API
fetch('https://swapi.dev/api/people/?page='+ getRandomPageNumber)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // Grab the requested list of people on the page
    var fetchRequest = data;

    var userInputEl = document.getElementById('user-input');
    var displayEl = document.getElementById('display');

    // When the User presses 'Enter', change the word and clear the input field
    userInputEl.addEventListener('keypress', function(event){
      if (event.key === 'Enter'){
        var getRandomNumber = getRandomInt(fetchRequest.results.length);

        displayEl.innerHTML = fetchRequest.results[getRandomNumber].name;

        userInputEl.value = '';
      }
    })
  });