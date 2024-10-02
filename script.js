/* ------------{Global Varaibles}---------------- */

const bttn = document.querySelector(`#submit`);


/* -------------{Reassignable Variables}--------------- */

/* ------------{Functions}---------------- */

bttn.addEventListener(`click`, async () => {
  const setName = document.querySelector(`#user-input`).value;
  const response = await axios.get(`https://api.tcgdex.net/v2/en/sets/${setName}`);
  console.log(response.data.cards);
});

/* ------------{Event Listeners}---------------- */

/* -------------{Console Logs}--------------- */

console.log(`Loading...`);

/* ------------{Addtional Notes}---------------- */