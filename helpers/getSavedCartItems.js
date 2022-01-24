const getSavedCartItems = () => {
  const produto = localStorage.getItem('cartItems');
  return produto;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}