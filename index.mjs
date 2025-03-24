import fetch from "node-fetch";

const PLAYER_NAME = "andreasn@uia.no";
const BASE_URL = "https://alchemy-kd0l.onrender.com";

console.log("starting the UiA Alchemy Challenge");

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

async function submitFirstAnswer(answer) {
  try {
    const response = await fetch(`${BASE_URL}/answer`, {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        player: PLAYER_NAME,
        answer: answer,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("This is the response after submitting the answer:");
    console.log(data);

    return data;
  } catch (error) {
    console.error(
      "An error occurred while submitted the answer. Try again:",
      error.message
    );

    return null;
  }
}

async function getClue() {
  try {
    const response = await fetch(`${BASE_URL}/clue?player=${PLAYER_NAME}`);

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const clueText = await response.text();
    console.log("Clue for the first challenge");
    console.log(clueText);
  } catch (error) {
    console.error("An error occurred. Please try again:", error.message);
  }
}

async function runTheChallenge() {
  const challengeData = await startChallenge();

  if (!challengeData || !challengeData.challenge) {
    console.log("No challenge data received or challenge missing.");
    return;
  }

  const answer = "GoldQuicksilverSilverIronGold";

  const answerResponse = await submitFirstAnswer(answer);

  if (answerResponse) {
    console.log(
      "This is the response from server after the answer has been successfully submitted:"
    );
    console.log(answerResponse);

    if (answerResponse.message === "Correct answer!") {
      console.log(
        "Answer submitted successfully. Proceeding to get the clue..."
      );
      await getClue();
    } else {
      console.log("Answer submission failed or was incorrect. Try again.");
    }
  } else {
    console.log("No response was received from the server.");
  }
}
runTheChallenge();
