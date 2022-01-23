const fetchProducts = async (product) => { // Ref. Reqist 1 e 8, grupo de estudos e mentoria em 14/01
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
fetchProducts();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
