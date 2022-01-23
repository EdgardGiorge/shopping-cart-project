const getSavedCartItems = () => {
  if (localStorage.length > 0) {
   const arrRetorno = localStorage.getItem('cartItems').split(' ');
   localStorage.setItem('cartItems', '');
   return arrRetorno;
  }
  return [];
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
