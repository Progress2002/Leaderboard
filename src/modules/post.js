import URL from "./api-url.js";

const POST_SCORE = async (userInput) => await fetch (URL, {
  method: 'POST',
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(userInput),
})
.then(response => response.json())
.then(data => data.result)

export default POST_SCORE;