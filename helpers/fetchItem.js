const fetchItem = async (itemID) => {
  const url = `https://api.mercadolibre.com/items/${itemID}`;
  const promise = await fetch(url).then((response) => response.json());
  const obj = promise.then((object) => object);
  return obj;// seu código aqui
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
