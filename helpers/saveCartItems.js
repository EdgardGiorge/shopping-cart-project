  let svId = '';
const saveCartItems = (id, action = true) => {  
  if (action) {
    svId = `${svId} ${id}`;
    localStorage.setItem('id', svId);    
  } else {
    svId = svId.replace(id, '');
    localStorage.setItem('id', svId);
  }// seu código aqui
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}