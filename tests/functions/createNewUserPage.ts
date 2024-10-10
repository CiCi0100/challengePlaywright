import { Locator, Page, expect  } from "playwright/test";
import { UserDTO} from "../dto/user_dto.ts";

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
    }

    async submitFormCreateAccount(userDTO:UserDTO){
        await this.fieldSignIn.click();
        await this.fieldEmail.click();
        await this.fieldEmail.fill(userDTO.email);
        await this.buttonCreateAccount.click();
        await this.fieldTitle.click();
        await this.fieldFirstName.click();
        await this.fieldFirstName.fill(userDTO.firstName);
        await this.fieldLastName.click();
        await this.fieldLastName.fill(userDTO.lastName);
        await this.fieldPassword.click();
        await this.fieldPassword.fill(userDTO.password);
        await this.fieldDay.selectOption(userDTO.day);
        await this.fieldMonths.selectOption(userDTO.months);
        await this.fieldYears.selectOption(userDTO.years);
        await this.buttonRegister.click();
    };

    async verificaMsgErro(field: string){
        const errorMsg = this.page.locator('//div[@class="alert alert-danger"]')
        .filter({hasText: field})
        .getByText(field + ' ' + 'is required.');
        await errorMsg.isVisible();
    };
}

