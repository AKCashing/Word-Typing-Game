// Grab the Body element ID
var bodyEl = document.getElementById("body");

// Grab the Homepage and Start-Button element ID's
var homepageEl = document.getElementById('homepage');
var startButtonEl = document.getElementById('start');

// Grab the Gamepage, Display, and User-Input element ID's
var gamepageEl = document.getElementById('gamepage');
var displayEl = document.getElementById('display');
var userInputEl = document.getElementById('user-input');

// Create Timer
var timerEl = document.getElementById('timer');
var timeLeft = 10;

// Fetch the NASA Api
fetch('https://api.nasa.gov/planetary/apod?date=2023-12-13&api_key=vOwdgQmkO84FcC7PiaiPg85OU33T3xdJXNBhAfPB')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var imageRequest = data.url;

    bodyEl.style.backgroundImage = "url("+ imageRequest +")";
  });

// Creating Timer function
function timer() {
    var countDown = setInterval(function() {
    timeLeft--;
    timerEl.textContent = 'Time: '+timeLeft;

    if(timeLeft === 0) {
        clearInterval(countDown);

        timerEl.textContent = "Your time is up!";
    }
    }, 1000);
}

// Random number generator function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Randomly grab a number(0-8)
var getRandomPageNumber = getRandomInt(9);

// Fetch the Star Wars API
fetch('https://swapi.dev/api/people/?page='+getRandomPageNumber)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // Grab the requested list of people on the API page
    var fetchRequest = data;

    // When the user clicks the button 'Start', begin the game
    startButtonEl.addEventListener('click', function(event){

      // Hide the Homepage and reveal the Gamepage
      homepageEl.style.display = 'none';
      gamepageEl.style.display = 'flex';

      // Timer begins
      timer();

      // Roll a random number
      var getRandomNumber = getRandomInt(fetchRequest.results.length);

      // Display the word onto the page
      displayEl.innerHTML = fetchRequest.results[getRandomNumber].name;
    })

    // When the User presses 'Enter', change the word and clear the input field
    userInputEl.addEventListener('keypress', function(event){
      if (event.key === 'Enter'){

        // Roll a random number
        getRandomNumber = getRandomInt(fetchRequest.results.length);

        // Display the word onto the page
        displayEl.innerHTML = fetchRequest.results[getRandomNumber].name;

        // Clear the input field
        userInputEl.value = '';
      }
    })
  });
