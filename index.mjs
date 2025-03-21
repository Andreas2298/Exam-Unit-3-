import fetch from "node-fetch";

const PLAYER_NAME = "andreasn@uia.no";
const BASE_URL = "https://alchemy-kd0l.onrender.com";

console.log("starting the UiA Alchehmy Challenge");

async function startChallenge() {
  try {
    const response = await fetch(`${BASE_URL}/start?player=${PLAYER_NAME}`, {
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      console.log("The first challenge is received");
      console.log(data);

      return data;
    } else {
      console.log("The response is not json. Try again");
      const text = await response.text();

      console.log(text);
    }
  } catch (error) {
    console.error(
      "There was error fetching the challenge. Please try again:",
      error.message
    );
  }
}

startChallenge();
