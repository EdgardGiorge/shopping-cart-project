let stgId = '';
const saveCartItems = (id, action = true) => {  
  if (action) {
    stgId = `${stgId} ${id}`;
    localStorage.setItem('id', stgId);    
  } else {
    stgId = stgId.replace(id, '');
    localStorage.setItem('id', stgId);
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
