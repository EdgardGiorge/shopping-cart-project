const fetchProducts = async (product) => {
  const url = ` https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return error; 
  }// seu código aqui
};
console.log(fetchProducts());

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
