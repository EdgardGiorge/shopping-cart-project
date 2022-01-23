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

function cartItemClickListener(event) {
  event.target.parentNode.removeChild(event.target);
  saveCartItems(event.target.id, false);
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
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
  const btn = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!', sku);
  btn.addEventListener('click', async (actualBtn) => {
    const [carrinho] = document.getElementsByClassName('cart__items');    
    const id = await fetchItem(actualBtn.target.id);    
    carrinho.appendChild(createCartItemElement(id));  
  });
  section.appendChild(btn);

  return section;
}

async function percorreProdutos() {
  const arrProdutos = await fetchProducts();
  arrProdutos.forEach((element) => {
    const items = document.getElementsByClassName('items');
    items[0].appendChild(createProductItemElement(element));
  });
  return true;
}
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

window.onload = () => { 
  percorreProdutos();  
 };