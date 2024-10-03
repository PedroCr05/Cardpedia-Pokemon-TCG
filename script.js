/* ------------{Global Varaibles}---------------- */

const bttn = document.querySelector(`#submit`);
const apiLibrary = document.querySelector(`.card-names`);
const cardImg = document.querySelector(`#card-png`);
const logoPng = document.querySelector(`.test`);

/* -------------{Reassignable Variables}--------------- */

/* ------------{Functions}---------------- */

bttn.addEventListener(`click`, async () => {
  apiLibrary.textContent = '';
  const setName = document.querySelector(`#user-input`).value.toLowerCase();

  const fetchList = await axios.get(`https://api.tcgdex.net/v2/en/sets/${setName}`);
  const fetchedData = fetchList.data;
  console.log(fetchedData)

  let cards = fetchedData.cards;
  cards.forEach(card => {
    const listEm = apiLibrary.appendChild(document.createElement(`li`));
    listEm.textContent = card.name;
    listEm.addEventListener(`click`, ()=>{
      fetchPkmn(card.name);
    }
  );
})});

async function fetchPkmn(name){
  const response = await axios.get(`https://api.tcgdex.net/v2/en/cards/${name}`);
  apiLibrary.textContent = ``;
  console.log(response);

  let cardTitle = apiLibrary.appendChild(document.createElement(`div`));
  cardTitle.textContent = response.data.name;

  let dexId = apiLibrary.appendChild(document.createElement(`div`));
  dexId.textContent = response.data.dexId;
  cardImg.src = `${response.data.image}/low.png`;

  let setName = apiLibrary.appendChild(document.createElement(`div`));
  setName.textContent = `Set name: ${response.data.set.id.toUpperCase()}`;

  let artist = apiLibrary.appendChild(document.createElement(`div`));
  artist.textContent = `Illustrator: ${response.data.illustrator}`;

  if (response.data.category == `Pokemon`){
    let pkmnTyping = apiLibrary.appendChild(document.createElement(`div`));
    pkmnTyping.textContent = `Typing: ${response.data.types}`
  } else {
    let cardCategory = apiLibrary.appendChild(document.createElement(`div`));
    cardCategory.textContent = `Category: ${response.data.category}`
  }

  if (response.data.hp){
    let pkmnHp = apiLibrary.appendChild(document.createElement(`div`));
    pkmnHp.textContent = `Hp: ${response.data.hp}`
  }

  if (response.data.attacks){
  for (i = 0; i < response.data.attacks.length; i++){
    let atkName = apiLibrary.appendChild(document.createElement(`div`));
    atkName.textContent = `Attack Name: ${response.data.attacks[i].name}`;

    let atkDmg = apiLibrary.appendChild(document.createElement(`div`));
    atkDmg.textContent = `Damage: ${response.data.attacks[i].damage}`;

    let effect = apiLibrary.appendChild(document.createElement(`div`));
    effect.textContent = `Move Effect: ${response.data.attacks[i].effect}`;
  }
}

// If can be very simple. Basically a boolean but not really.
  if (response.data.description){
    let cardDesc = apiLibrary.appendChild(document.createElement(`div`));
    cardDesc.textContent = `Description: ${response.data.description}`; 
  }
}
/* ------------{Event Listeners}---------------- */

/* -------------{Console Logs}--------------- */

console.log(`Loading...`);

/* ------------{Addtional Notes}---------------- */