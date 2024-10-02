// /*---------------------------- Global Variables ----------------------------*/

const apiKey = `3415afd7-b9e7-47ec-bc98-0ad97808ac73`;

/*---------------------------- Variables (state) ----------------------------*/

let score = 0;

/*------------------------ Cached Element References ------------------------*/

const higher = document.querySelector(`#up-arrow-outline`)
const lower = document.querySelector(`#down-arrow-outline`)
const timer = document.querySelector(`#time-display`);
const messageDisplay = document.querySelector(`#message-display`);
const plyrCard = document.querySelector(`#plyr-card`);
const botCard = document.querySelector(`#bot-card`);
const pkmnNames = document.querySelector(`.pkmn-names`);

/*-------------------------------- Functions --------------------------------*/

searchButton.addEventListener('click', async () => {
  const pokemonName = pokemonNameInput.value;
  const response = await axios.get(``);
  console.log(response.data);
});

/*----------------------------- Event Listeners -----------------------------*/

/*----------------------------- Console Logging -----------------------------*/



// Step 1: fetch two random pokemon
// step 2: user guess
    // step 2.1: wrong
        // step 2.1.1: Both cards wiped
        // step 2.1.2: go back to step 1.
    // step 2.2:
        // step 2.2.1: Oppsing card is now player's card.
        // step 2.2.2: Fetch 1 random opposing card.
        // step 2.2.3: go back to step 2.