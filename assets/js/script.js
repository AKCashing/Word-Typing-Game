fetch('https://swapi.dev/api/people')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

const wordDisplayEl = document.getElementById('word-display');
const generateButtonEl = document.getElementById('generate');

const fetchWordValue = data;

generateButtonEl.addEventListener('click', function(event) {

    wordDisplayEl.innerHTML = fetchWordValue;
})