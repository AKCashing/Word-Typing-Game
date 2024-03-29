// Grab the Body element ID
var bodyEl = document.getElementById("body");

// Grab the Homepage and Start-Button element ID's
var homepageEl = document.getElementById('homepage');
var startButtonEl = document.getElementById('start');

// Grab the Gamepage, Display, and User-Input element ID's
var gamepageEl = document.getElementById('gamepage');
var displayEl = document.getElementById('display');
var userInputEl = document.getElementById('user-input');

//grab the Scorescreen ID, hide the scorescreen
var scoreScreen = document.getElementById('score-screen');
scoreScreen.style.display = 'none';

// Create Timer
var timerEl = document.getElementById('timer');
var timeLeft = 60;

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
        localStorage.setItem('gameScore', gameScore);

        homepageEl.style.display = 'none';
        gamepageEl.style.display = 'none';
        scoreScreen.style.display = 'flex';
        timerEl.textContent = "Your time is up!";
    }
    }, 1000);
}

// Random number generator function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Created scoring Var
var gameScore = 0;
var scoreDisplay = document.getElementById("score");

// Randomly grab a number(0-8)
var getRandomPageNumber = getRandomInt(8) + 1;

function displayScores() {
    var scoreList = localStorage.getItem('gameScore');
    console.log(scoreList);

    if (gameScore !== null) {
      var ul = document.createElement('ul');

      var li = document.createElement('li');
      li.textContent = 'Game Score: ' + scoreList;
      li.className = 'score-list-item';
      li.id = 'score-list';
      ul.appendChild(li);

      document.body.appendChild(ul);
    }
  }
document.getElementById('view-scores').addEventListener('click', function() {
  displayScores();
});

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

      
      // Roll a random number
      var getRandomNumber = getRandomInt(fetchRequest.results.length);

      displayEl.innerHTML = removeAccents(fetchRequest.results[getRandomNumber].name);
      
      homepageEl.style.display = 'none';
      gamepageEl.style.display = 'flex';

      // Timer begins
      timer();

      // Display the word onto the page
      displayEl.innerHTML = fetchRequest.results[getRandomNumber].name;
    })

    // When the User presses 'Enter', change the word and clear the input field
    userInputEl.addEventListener('keypress', function(event){
    removeAccents(displayEl.textContent);
      console.log(displayEl.textContent);
      if (event.key === 'Enter' && userInputEl.value == displayEl.textContent){
        gameScore++;
        scoreDisplay.textContent = gameScore;

        // Roll a random number
        var getRandomNumber = getRandomInt(fetchRequest.results.length);

        // Display the word onto the page
        displayEl.innerHTML =  removeAccents(fetchRequest.results[getRandomNumber].name);

        // Clear the input field
        userInputEl.value = '';
      }
    })
  });

  function removeAccents(string){
    return string.normalize("NFD").replace(/\p{Diacritic}/gu,"");
  }