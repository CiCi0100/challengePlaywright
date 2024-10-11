import { Locator, Page, expect } from "@playwright/test";
import { UserDTO } from "../dto/user_dto";


export class CustomerLogin{
    page: Page;
    emailLogin: Locator;
    passwordLogin: Locator;
    signInButton: Locator;
    forgotPasswordTxt: Locator;

    constructor (page: Page){
        this.page = page;

        this.emailLogin = this.page.locator('#email');
        this.passwordLogin = this.page.getByLabel('Password');
        this.signInButton = this.page.getByRole('button', { name: ' Sign in' });
    }
}