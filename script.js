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
  // coloque seu código aqui
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.id = sku;
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
createProductImageElement();

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

const Products = async () => { // Ref. Reqist 1 e 8, grupo de estudos e mentoria em 14/01
  const items = document.querySelector('.items'); 
  const data = await fetchProducts('computador');
  const { results } = data;
  console.log(results);
  results.forEach((item) => {
    const itemProduct = createProductItemElement(item);
    items.appendChild(itemProduct);  
  });
};

window.onload = () => {
  Products();
};
