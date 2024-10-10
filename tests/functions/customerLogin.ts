import { Locator, Page, expect } from "@playwright/test";
import { UserDTO } from "../dto/user_dto";

export class CustomerLogin{
    page: Page;
    email: Locator;
    password: Locator;
    signInButton: Locator;
    forgotPasswordTxt: Locator;

    constructor (page: Page){
        this.page = page;
        this.email = this.page.locator('#email');
        this.password = this.page.getByLabel('Password');
        this.signInButton = this.page.getByRole('button', { name: ' Sign in' });
    }

    async goToLogin(userDTO: UserDTO){
        await this.email.fill(userDTO.email);
        await this.password.fill(userDTO.password);
        await this.signInButton.click();
    }
}

