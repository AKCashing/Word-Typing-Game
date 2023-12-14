var bodyEl = document.getElementById("body")

var pageNumber = getRandomInt(8) + 1

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

fetch('https://swapi.dev/api/people/?page=' + pageNumber)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    var fetchRequest = data;

    var buttonEl = document.getElementById('generate');
    var wordEl = document.getElementById('fetch-word');

    buttonEl.addEventListener('click', function(event) {

      var num = getRandomInt(fetchRequest.results.length);

      console.log(fetchRequest.results[num].name)

      wordEl.innerHTML = fetchRequest.results[num].name;
    })

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    
  });

var apiKey = 'vOwdgQmkO84FcC7PiaiPg85OU33T3xdJXNBhAfPB';

  fetch('https://api.nasa.gov/planetary/apod?date=2023-12-13&api_key=' + apiKey)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var imageRequest = data.url;

    bodyEl.style.backgroundImage = "url("+ imageRequest +")";
  });