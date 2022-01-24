const fetchItem = async (identificador) => {
  const url = `https://api.mercadolibre.com/items/${identificador}`;
  try {
    const response = await fetch(url);
    const produto = await response.json();
    return produto;
  } catch (error) {
      return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}