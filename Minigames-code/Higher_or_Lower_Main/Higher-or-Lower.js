const pokemonNameInput = document.querySelector('#pokemon-name');
const searchButton = document.querySelector('#search-button');
const cardData = document.querySelector('#card-data');


searchButton.addEventListener('click', async () => {
  const pokemonName = pokemonNameInput.value;
  const response = await axios.get(`https://api.tcgdex.net/v2/en/cards/${pokemonName}`);
  console.log(response.data);
});