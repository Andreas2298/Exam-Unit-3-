
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


How I solved the second challenge: 

- I was provided with a note with a poem, where the poem read "Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime.” To solve this puzzle, I took each of the capital letters from the poem S, I, L, V, E, R and put them together into one word, Silver. The register the correct answer I used my const answer = ""; from the first challenge put the word Silver in there. 

How I solved the third challenge. 

For this challenge I was provided with numbers, and a clue where I would have to look for the word "BOMBAST" in Chirurgische Bücher und Schrifften and then note down the page numbers where this word was located. After the page numbers with "BOMBAST" were located, I tried using these numbers as books ciphers. Given the sequence of numbers, I tried experimenting by having each set of numbers mapped to the corresponding page, line and word position. Using the page numbers and sequence of numbers that I was provided with in the challenge, I tried to deocde the message. Unfortunalty, I was not able to extract any meaningful words from the text to make me complete the challenge. 

Links I used:

https://en.wiktionary.org/wiki/%E2%98%89

https://en.wikipedia.org/wiki/Mercury_(element)

https://en.wiktionary.org/wiki/%E2%98%BE

https://en.wikipedia.org/wiki/Planetary_symbols

https://embassyofthefreemind.com/nl/collectie/online-catalogus/detail/188075d9-b170-8e8f-be2a-49af6c981d2e/media/a1a86e9c-a585-33fc-2382-8b8b6d4b393a?mode=detail&view=horizontal&q=Johann%20Huser&rows=1&page=1&fq%5B%5D=search_s_digitized_publication:%22Ja%22 
