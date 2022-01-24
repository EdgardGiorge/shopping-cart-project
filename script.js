// Ref. Mentorias e salas de estudo e 3 code review. 19/01 requisito 4 16:30 e 5 Mentoria  16:40 Eduardo Bazler no PR da Mariana moraes. Exercícios do course

function load() {
  const loading = document.querySelector('.loading');

setTimeout(function () {
  const body = document.querySelector('.body');
  body.removeChild(loading);
  }, 2000); // timout de 2 segundos pra carregar
}

function createProductImageElement(imageSource) {
const img = document.createElement('img');
img.className = 'item__image';
img.src = imageSource;
return img;
} // buttons, img e descrições com os produtos visíveis

function createCustomElement(element, className, innerText) {
const e = document.createElement(element);
e.className = className;
e.innerText = innerText;
return e;
}

function createProductItemElement({ sku, name, image }) {
const section = document.createElement('section');
section.className = 'item';

section.appendChild(createCustomElement('span', 'item__sku', sku));
section.appendChild(createCustomElement('span', 'item__title', name));
section.appendChild(createProductImageElement(image));
section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

document.getElementsByClassName('items')[0].appendChild(section);

return section;
}

async function produtos() {
const produto = await fetchProducts('computador');
produto.forEach((item) => {
  const { id, title, thumbnail } = item;
  const obj = { sku: id, name: title, image: thumbnail };
  createProductItemElement(obj);
});
}

const compras = document.querySelector('.cart__items');
const div = document.querySelector('.total-price');

function divPreco() {
const pagar = document.createElement('p');
pagar.innerText = '0';
div.appendChild(pagar);
}
function totalPrice() {
div.innerHTML = '';

let sum = 0;
const car = document.querySelectorAll('.cart__item');
car.forEach((element) => {
  const text = element.innerText;
  const value = text.split('PRICE: $');
  sum += Number(value[1]); 
});

const pagar = document.createElement('p');
pagar.innerText = `${sum}`;
div.appendChild(pagar);

return sum;
} // preço no cart somando e subtraindo

let list = [];

function cartStorage(objeto) {
const item = JSON.stringify(objeto);
saveCartItems(item);
} // localStorage, armazenamento em list

function cartItemClickListener(event) {
const list1 = document.querySelectorAll('.cart__items');

list1.forEach((item) => {
    const text = event.target.innerText;
    const value = text.split('PRICE: $');
    const title = text.split('| NAME: ');
    const title1 = title[1].split(' |');
    const sku = title[0].split('SKU: ');
    const skuOk = sku[1].split(' ');
    const transformaTextoEmObj = { sku: skuOk[0], name: title1[0], salePrice: Number(value[1]) };
    const result = list.filter((element) => element.sku !== transformaTextoEmObj.sku);
    list = result;
    cartStorage(list);
    item.removeChild(event.target);
  });
} // localStorage, armazenamento em list

function createCartItemElement({ sku, name, salePrice }) { 
const li = document.createElement('li');
li.className = 'cart__item';
li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;

document.getElementsByClassName('cart__items')[0].appendChild(li);

totalPrice();
li.addEventListener('click', cartItemClickListener);
li.addEventListener('click', totalPrice);

return li;
} // inseri elementos no cart e traz preço Total

async function produtoCarrinho(item) { 
const obj = await fetchItem(item);
const { id: identifica, title, price } = obj;
const objEspecifico = { sku: identifica, name: title, salePrice: price };
createCartItemElement(objEspecifico);
list.push(objEspecifico);
cartStorage(list);
} // Cria lista pro localStorage

function getStorageCart() { 
if (localStorage.length > 0) {
  const carrinho = JSON.parse(getSavedCartItems());
  list = carrinho;
  carrinho.forEach((item) => {
     createCartItemElement(item);
  });
}
} // lista de execução de compras no localStorage 

function eventAddButton() { 
  const button0 = document.querySelectorAll('.item__add');
  
  button0.forEach((botao, index) => {
    botao.addEventListener('click', () => {
      const items = document.getElementsByClassName('item__sku')[index].innerText;
      produtoCarrinho(items); 
    });
  });
  }

function esvaziaCart() {
const button1 = document.querySelector('.empty-cart');
button1.addEventListener('click', () => {
  compras.innerHTML = '';
  const item = document.querySelector('.total-price>p');
  item.innerText = '0';
  localStorage.clear();
  list = [];
});
}
esvaziaCart();

window.onload = async () => { 
  load();
  await produtos();
  eventAddButton();
  divPreco();
  getStorageCart();
};