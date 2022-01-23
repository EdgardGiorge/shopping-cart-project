require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  test('Se fetchItem é uma funcao', () => {
    expect(typeof fetchItem).toBe('function');
  });
  test('Se ao executar fetchItem com o argumento "MLB1615760527" fetch foi chamado', async () =>{
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  test('Se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  test('Se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo', async () => {
    expect(await fetchItem('MLB1615760527')).toBe(item);
  });
  test('Se ao chamar a funcao sem parametros, retorno uma mensagem derro', async () =>{
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));// implemente seus testes aqui
  });  
});
