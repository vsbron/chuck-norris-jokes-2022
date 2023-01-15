import { loadJoke } from "./model.js";
import jokeView from "./view.js";
import "core-js/stable"; // Polyfill all the rest
import "regenerator-runtime/runtime"; // Polyfill async/await

// Handler that gets from MODEL and sends it to VIEW
const controlPullJoke = async function () {
  try {
    // Get the joke from MODEL
    const joke = await loadJoke();

    // Send the joke to print in VIEW
    jokeView.printJoke(joke);
  } catch (err) {
    console.log(err);
  }
};

// Initialization function
const init = function () {
  //
  jokeView.handlerBtn(controlPullJoke);
};

init();
