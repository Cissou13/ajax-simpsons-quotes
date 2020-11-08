// This function loads pokemon data from the Pokemon API
function getSimpsonQuote() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  // const pokemonId = 1;
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios
    .get(url)
    .then(function (response) {
      return response.data; // response.data instead of response.json() with fetch
    })
    .then(function (simpsonQuote) {
      console.log('data decoded from JSON:', simpsonQuote);

      // Build a block of HTML
      let simpsonQuoteHtml = `
        <p><strong>${simpsonQuote[0].character}</strong></p>
        <img src="${simpsonQuote[0].image}" />
      <blockquote>${simpsonQuote[0].quote}</blockquote>`;
      const simpsonsQuote = document.querySelector('#simpson-quote');
      simpsonsQuote.innerHTML = simpsonQuoteHtml;
    });
}

getSimpsonQuote();
