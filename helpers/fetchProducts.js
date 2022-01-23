const fetchProducts = async () => {
  const query = 'computador';
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
try { 
  const promise = fetch(endpoint).then((response) => response.json());
  const obj = await promise.then((object) => object.results);
  console.log(promise);
  return obj;
} catch (error) {
  return error;
} 
  };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}