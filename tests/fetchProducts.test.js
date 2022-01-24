require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => { // Ref. Reqist 1 e 8, grupo de estudos e mentoria em 14/01
  test('Se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
   })
   test('Se ao executar a fetchProducts com argumento "computador", verificar se "fetch" foi chamado', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  test('Se a chamada da função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    expect.assertions(1);
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);    
  })
  test('Se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    expect.assertions(1);
    const resultsData = await fetchProducts('computador');
    expect(resultsData).toEqual(computadorSearch.results);
  })
  test('Se a chamada da função fetchProducts, não tiver argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    const errorUrl = await fetchProducts();
    expect(errorUrl).toEqual(new Error('You must provide an url'));
  })

   // implemente seus testes aqui  
});
