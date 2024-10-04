/* ------------{Global Variables}---------------- */
const bttn = document.querySelector(`#submit`);
const apiLibrary = document.querySelector(`.api-library`);
const cardImg = document.querySelector(`#cardPng`);
const dropMenuUpdate = document.querySelector(`.title-menu`);
const htsDropMenu = document.querySelector(`.details-title`);
const tcgSets = document.querySelector(`.tcg-sets`);
/* ------------{Functions}---------------- */
async function fetchPkmn(name) {
  const response = await axios.get(
    `https://api.tcgdex.net/v2/en/cards/${name}`
  );
  apiLibrary.textContent = ``;
  console.log(response);

  cardImg.src = `${response.data.image}/low.png`;
  document.getElementById(`cardPng`).style.opacity = `1`;

  let cardTitle = apiLibrary.appendChild(document.createElement(`div`));
  cardTitle.className = `card-title`;
  cardTitle.textContent = response.data.name;

  let dexId = apiLibrary.appendChild(document.createElement(`div`));
  dexId.className = `dex-id`;
  dexId.textContent = response.data.dexId;

  let setName = apiLibrary.appendChild(document.createElement(`div`));
  setName.className = `set-name`;
  setName.textContent = `Set name: ${response.data.set.id.toUpperCase()}`;

  let artist = apiLibrary.appendChild(document.createElement(`div`));
  artist.className = `artist`;
  artist.textContent = `Illustrator: ${response.data.illustrator}`;

  if (response.data.category == `Pokemon`) {
    let pkmnTyping = apiLibrary.appendChild(document.createElement(`div`));
    pkmnTyping.className = `pkmn-typing`;
    pkmnTyping.textContent = `Typing: ${response.data.types}`;
  } else {
    let cardCategory = apiLibrary.appendChild(document.createElement(`div`));
    cardCategory.className = `card-category`;
    cardCategory.textContent = `Category: ${response.data.category}`;
  }

  if (response.data.hp) {
    let pkmnHp = apiLibrary.appendChild(document.createElement(`div`));
    pkmnHp.className = `pkmn-hp`;
    pkmnHp.textContent = `Hp: ${response.data.hp}`;
  }

  if (response.data.attacks) {
    for (i = 0; i < response.data.attacks.length; i++) {
      let atkName = apiLibrary.appendChild(document.createElement(`div`));
      atkName.className = `atk-name`;
      atkName.textContent = `Attack Name: ${response.data.attacks[i].name}`;

      let atkDmg = apiLibrary.appendChild(document.createElement(`div`));
      atkDmg.className = `atk-dmg`;
      atkDmg.textContent = `Damage: ${response.data.attacks[i].damage}`;

      let effect = apiLibrary.appendChild(document.createElement(`div`));
      effect.className = `effect`;
      effect.textContent = `Move Effect: ${response.data.attacks[i].effect}`;
    }
  }

  if (response.data.description) {
    let cardDesc = apiLibrary.appendChild(document.createElement(`div`));
    cardDesc.className = `card-desc`;
    cardDesc.textContent = `Description: ${response.data.description}`;
  }
}
/* ------------{Event Listeners}---------------- */
bttn.addEventListener(`click`, async () => {
  apiLibrary.textContent = ``;
  const setName = document.querySelector(`#user-input`).value.toLowerCase();

  const fetchList = await axios.get(`https://api.tcgdex.net/v2/en/sets/${setName}`);
  const fetchedData = fetchList.data;
  const cards = fetchedData.cards;

  cards.forEach((card) => {
    const listEm = apiLibrary.appendChild(document.createElement(`div`));
    listEm.textContent = card.name;
    listEm.className = "name-of-cards";
    listEm.addEventListener(`click`, () => {
      fetchPkmn(card.name);
      dropMenuUpdate.textContent = `Card information:`;
    });
  });
});

htsDropMenu.addEventListener(`click`, async ()=>{
  const fetchList = await axios.get(`https://api.tcgdex.net/v2/en/sets`);
  const fetchedData = fetchList.data;

  fetchedData.forEach((set) =>{
    const listEm = tcgSets.appendChild(document.createElement(`div`));
    listEm.className = "set-titles";
    listEm.textContent = set.name;
  });
});
