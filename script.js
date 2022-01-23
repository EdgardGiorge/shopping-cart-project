function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id, title, thumbnail }) {
  const section = document.createElement('section');
  section.className = 'item';
  
  const sectionItems = document.querySelector('.items'); // Ref. Reqist 1 e 8, grupo de estudos e mentoria em 14/01
  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  sectionItems.appendChild(section);

  return section;
}
createProductImageElement();

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
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
