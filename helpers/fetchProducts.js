// const fetch = require('node-fetch');

const fetchProducts = async (query) => {  
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const retorno = await fetch(endpoint)
                        .then((response) => response.json())
                          .then((object) => object)
                            .catch((error) => error);
  return retorno;
  };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}