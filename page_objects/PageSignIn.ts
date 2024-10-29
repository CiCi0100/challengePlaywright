import { Locator, Page, expect  } from "playwright/test";

export class CreateNewCustomerAccount{
    page: Page;
    fieldFirstName: Locator;
    fieldLastName: Locator;
    fieldEmail: Locator;
    fieldPassword: Locator;
    buttonCreateAccount: Locator;
    fieldSignIn: Locator;
    fieldTitle: Locator;
    fieldDay: Locator;
    fieldMonths: Locator;
    fieldYears: Locator;
    buttonRegister: Locator;
    emailLogin: Locator;
    passwordLogin: Locator;
    signInButton: Locator;
    forgotPasswordTxt: Locator;

    constructor(page: Page){
        this.page = page;
        this.fieldSignIn = this.page.getByRole('link', { name: 'Sign in' });
        this.fieldEmail = this.page.locator('xpath=//input[@id="email_create"]');
        this.buttonCreateAccount = this.page.getByRole('button', { name: ' Create an account' });
        this.fieldTitle = this.page.getByLabel('Mrs.');
        this.fieldFirstName = this.page.locator('xpath=//input[@id="customer_firstname"]');
        this.fieldLastName = this.page.locator('xpath=//input[@id="customer_lastname"]');
        this.fieldPassword = this.page.locator('xpath=//input[@id="passwd"]');
        this.fieldDay = this.page.locator('#days');
        this.fieldMonths = this.page.locator('#months');
        this.fieldYears =  this.page.locator('#years');
        this.buttonRegister = this.page.getByRole('button', { name: 'Register ' });
        this.emailLogin = this.page.locator('#email');
        this.passwordLogin = this.page.getByLabel('Password');
        this.signInButton = this.page.getByRole('button', { name: ' Sign in' });
    }
}