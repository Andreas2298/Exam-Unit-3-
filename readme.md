
Links I used for the first challenge:

https://en.wiktionary.org/wiki/%E2%98%89

https://en.wikipedia.org/wiki/Mercury_(element)

https://en.wiktionary.org/wiki/%E2%98%BE

https://en.wikipedia.org/wiki/Planetary_symbols

How I set up the first challenge and solved it:

The first step I made was to set up a javascript program to interact with the API called UiA Alchemy. This process involved defining functions needed to start the challenge, for submitting answers and for fetching clues, if necessary. I used node-fetch for this assignment to handle the HTTP requests to the API. The startChallenge function initiated the challenge, while the submitAnswer function sent a the answers to the server. The getClue function was made to get hints for the challenge.

As the first challenge presented a sequence of planetary symbols, which in this case was (☉☿☽♂☉), my task was to do research and figure out what these symbols meant. The symbols represented the metals Gold, QuickSilver, Silver, Iron and Gold and figured out that the answer was all these words together without any spaces, "GoldQuickSilverSilverIronGold". I created a runTheChallenge function which worked as a main logic controller for solving the challenge, and at the same time attempting a solution and handling the response form the server.
const challengeData = await startChallenge(); was used to make a request to the server to fetch the challenge data. The await keyword here ensured that the function waited until the server responded before proceeding. An error message would also be logged if the server response did not include a valid challenge. To prepare for the answer, const answer was used as this answer variable would store my attempt to solve the challenge. To submit the answer the function submitFirstAnswer(answer) was called to submit the first answer to the server. The await keyword ensured that that I could wait for the response from the server. To handle the server response,

if (answerResponse) {
console.log("Response from server after submitting the answer:");
console.log(answerResponse); was used and

if (answerResponse.message === "Correct answer!") {
console.log("Answer submitted successfully. Proceeding to get the clue...");
await getClue();
} else {
console.log("Answer submission failed or was incorrect. Try again.");
}
was used to validate the answer to check whether it was correct or incorrect.

} else {
console.log("No response received from the server.");
}

was used to handle any potential errors. If no response was received, an error message would be logged.

Using this function was effective because it created a structured flow. The function logically separated the steps of fetching the challenge, solving it and handling the response. The function also used error handling to carefully check wether the valid data is received, avoinng the program to break. Using async await also avoids issues.
