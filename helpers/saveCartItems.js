let svId = '';
const saveCartItems = (id, action = true) => {  
  if (action) {
    if (localStorage.getItem('cartItems') !== null) {
      svId = localStorage.getItem('cartItems');
    }
    svId = `${svId} ${id}`;
    svId = svId.trim();
    localStorage.setItem('cartItems', svId);    
  } else {
    svId = svId.replace(id, '').trim();
    localStorage.setItem('cartItems', svId);
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
