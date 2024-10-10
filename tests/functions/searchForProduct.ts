import { Page, expect } from '@playwright/test';

export class BuscaProdutoPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async HomePage() {
        await this.page.goto('http://www.automationpractice.pl/index.php?');
    }


    async buscarProduto(nomeProduto: string) {
        const botao = await this.page.getByPlaceholder('Search');
        await botao.click();
        await botao.fill(nomeProduto);
        await botao.press('Enter');
    }

    async verificaMensagemProdutoNaoEncontrado(produto: string) {

        const MensagemProdutoNaoEncontrado = await this.page.getByText(`No results were found for your search ${produto}`);
        expect(MensagemProdutoNaoEncontrado);
    }
}

