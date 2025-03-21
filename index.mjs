import fetch from "node-fetch";

const PLAYER_NAME = "andreasn@uia.no";
const BASE_URL = "https://bit.ly/UiA_Alchemy_25";

console.log("starting the UiA Alchehmy Challenge");

async function startChallenge() {
  try {
    const response = await fetch(`${BASE_URL}/start?player=${PLAYER_NAME}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("The first challenge is received");
    console.log(data);

    return data;
  } catch (error) {
    console.error(
      "There was error fetching the challenge. Please try again:",
      error.message
    );
  }
}

startChallenge();
