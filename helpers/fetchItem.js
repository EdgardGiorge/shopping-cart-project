const fetchItem = async (itemID) => {
  const endpoint = `https://api.mercadolibre.com/items/${itemID}`;
  const obj = await fetch(endpoint)
                        .then((response) => response.json())
                          .then((object) => object);
  return obj;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
