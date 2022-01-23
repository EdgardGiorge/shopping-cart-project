const getSavedCartItems = () => {
  if (localStorage.length > 0) {
    return localStorage.getItem('cartItems').split(' ');
   }
   return [];// seu código aqui
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
