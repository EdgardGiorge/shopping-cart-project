function load() {
  const loading = document.querySelector('.loading');
  return loading.remove();
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}
function createCustomElement(element, className, innerText, id = 0) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  e.id = id;
  return e;
}

let totalPrice = 0;
function cartItemClickListener(event) {
  const produto = event.target.innerText;
  const idPreco = produto.indexOf('PRICE') + 8;
  const preco = Number(produto.slice(idPreco, produto.length));
  console.log(preco);
  const preco1 = document.getElementById('price_cart');
  totalPrice -= preco;
  preco1.innerText = totalPrice;
  event.target.parentNode.removeChild(event.target);
  saveCartItems(event.target.id, false);
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  const preco = document.getElementById('price_cart');
  totalPrice += salePrice;
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  preco.innerText = totalPrice;
  li.id = sku;
  saveCartItems(sku);
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) { 
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const button0 = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!', sku);
  button0.addEventListener('click', async (actualBtn) => {
    const [car] = document.getElementsByClassName('cart__items');    
    const id = await fetchItem(actualBtn.target.id);    
    car.appendChild(createCartItemElement(id));  
  });
  section.appendChild(button0);

  return section;
}

async function produtos() {
  const produtos1 = await fetchProducts('computador');
  load();
  produtos1.results.forEach((element) => {
    const items = document.getElementsByClassName('items');
    items[0].appendChild(createProductItemElement(element));
  });
  return true;
}

function storage() {
  const arrStorage = getSavedCartItems().filter((element) => element !== '');  
  if (arrStorage.length > 0) {
    arrStorage.forEach(async (element) => {
      const [car] = document.getElementsByClassName('cart__items');    
      const id = await fetchItem(element);          
      car.appendChild(createCartItemElement(id)); 
    });  
  }
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

const [button1] = document.getElementsByClassName('empty-cart');
async function esvaziaCarrinho() {
  const cartItems = document.getElementsByClassName('cart__item');  
  for (let i = 0; i < cartItems.length; i = 0) {
    cartItems[i].parentNode.removeChild(cartItems[i]);
  }
  const preco = document.getElementById('price_cart');
  preco.innerText = '';
  localStorage.setItem('cartItems', '');
}
button1.addEventListener('click', esvaziaCarrinho);

window.onload = () => { 
  produtos();
  storage();  
 };