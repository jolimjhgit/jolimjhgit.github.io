// grab a reference for necessary HTML elements
// .joke-text
const jokeText = document.querySelector('.joke-text');
// .new-joke-btn 
const newJokeBtn = document.querySelector('.new-joke-btn');
// hint variable

// add 'click' eventListener to .new-joke-btn
newJokeBtn.addEventListener('click', getJoke);

getJoke();

// getJoke() function definition
function getJoke() {
  // make an API request to https://icanhazdadjoke.com/'
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  }).then(function(response) {
    /* convert Stringified JSON response to Javascript Object */
    return response.json();
  }).then(function(data) {
    /* replace innerText of .joke-text with data.joke */
    // extract the joke text
    const joke = data.joke;
    const d = Math.random();
    // do the replacement
    if (d < 0.04) {
      jokeText.innerText = "THReE e little -- WweEREWOLV-__+ES SITT1ng on tHE GROUND. On`e little BITE & ANoth3r -\ iS FOUND_---][]0"; 
    }
    else {
      jokeText.innerText = joke;
    }
  });
}   
