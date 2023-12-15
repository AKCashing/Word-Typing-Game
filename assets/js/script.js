// Grab the Homepage and Start-Button element ID's
var homepageEl = document.getElementById('homepage');
var startButtonEl = document.getElementById('start');

// Grab the Gamepage, Display, and User-Input element ID's
var gamepageEl = document.getElementById('gamepage');
var displayEl = document.getElementById('display');
var userInputEl = document.getElementById('user-input');

var score = 0;

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
    // Grab the requested list of people on the API page
    var fetchRequest = data;

    // When the user clicks the button 'Start', begin the game
    startButtonEl.addEventListener('click', function(event){
      var getRandomNumber = getRandomInt(fetchRequest.results.length);

      displayEl.innerHTML = fetchRequest.results[getRandomNumber].name;

      homepageEl.style.display = 'none';
      gamepageEl.style.display = 'flex';
    })

    // When the User presses 'Enter', change the word and clear the input field
    userInputEl.addEventListener('keypress', function(event){
      if (event.key === 'Enter'){
        // if (userInputEl === fetchRequest.results[getRandomNumber].name){
        //   score++;
        // }
        // console.log(score);

        var getRandomNumber = getRandomInt(fetchRequest.results.length);

        displayEl.innerHTML = fetchRequest.results[getRandomNumber].name;

        userInputEl.value = '';
      }
    })
  });