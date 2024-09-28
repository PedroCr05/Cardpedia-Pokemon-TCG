const cardData = document.querySelector('#pkmn-card');


searchButton.addEventListener('click', async () => {
  const pokemonName = pokemonNameInput.value;
  const response = await axios.get(`https://api.tcgdex.net/v2/en/cards/${pokemonName}`);
  console.log(response.data);
});