fetch('https://swapi.dev/api/people')
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