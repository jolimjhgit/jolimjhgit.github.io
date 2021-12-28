// grab a reference for necessary HTML elements
// .joke-text
const jokeText = document.querySelector('.joke-text');
// .new-joke-btn 
const newJokeBtn = document.querySelector('.new-joke-btn');
// hint variable
const hint = "D0n't WeR33W0olV-_wES #@VE N1CEe TeEE-.TH````?----";

// add 'click' eventListener to .new-joke-btn
newJokeBtn.addEventListener('click', getJoke());


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
    // do the replacement
    const d = Math.random();
    if (d < 0.2) {
      jokeText.innerText = d; 
    }
    else {
      jokeText.innerText = joke;
    }
  });
}
