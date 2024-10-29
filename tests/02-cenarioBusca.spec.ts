import { test, expect } from '@playwright/test';
import { BuscaProdutoPage } from '../steps/searchForProduct';


test.describe('Testes de busca por produto', () => {

    test.beforeEach(async ({ page }) => {
        const buscaProdutoPage= new BuscaProdutoPage(page);
        await buscaProdutoPage.HomePage();
    });


    test('Buscar produto existente', async ({page}) => {
        const buscaProdutoPage= new BuscaProdutoPage(page);
        await buscaProdutoPage.buscarProduto('dress');
    });

    
    test('Buscar produto inexistente', async ({page}) => {
        const buscaProdutoPage= new BuscaProdutoPage(page);
        await buscaProdutoPage.buscarProduto('Teste');
        await buscaProdutoPage.verificaMensagemProdutoNaoEncontrado('"Teste"');
    });
});

