import { URL, ERROR_MSG } from "./config.js";

// The basic function to fetch the data
export const getData = async function () {
  try {
    // Basic fetch & json()
    const response = await fetch(URL);
    const data = await response.json();

    // If joke wasn't received - throw error
    if (!data.id) throw new Error(ERROR_MSG);

    return data;
  } catch (err) {
    throw err;
  }
};
