import { getData } from "./helpers";

export const loadJoke = async function () {
  try {
    const res = await getData();

    console.log(res);
    // Create object with joke and it's ID
    const joke = { joke: res.value, id: Math.floor(Math.random() * 500) };

    return joke; // Pass back to CONTROLLER
  } catch (err) {
    console.log(err);
  }
};
