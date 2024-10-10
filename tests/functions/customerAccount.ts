import { Locator, Page, expect } from "playwright/test";
import { UserDTO } from "../dto/user_dto";

export class customerAccount{
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async ConfirmarCadastroFeito(){
        await expect(this.page.getByText('Your account has been created.')).toBeVisible();
    }

    // async verificarUsuarioEstaLogado(userDTO: UserDTO){

    //     await this.page.waitForTimeout(5000);
    //     await this.page.waitForLoadState();
    //     await expect(this.page.getByText('//span[contains(userDTO.firstName + ' ' + userDTO.lastName)]'));
    // }
}

