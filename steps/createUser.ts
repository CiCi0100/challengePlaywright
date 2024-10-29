import { Locator, Page, expect } from "playwright/test";
import { CreateNewCustomerAccount } from '../page_objects/PageSignIn.ts';
import { generateUser } from '../src/gerador.ts';
import { saveUser } from '../src/gerador.ts';

export class CreateAccountActions {
    createNewCustomerAccount: CreateNewCustomerAccount;

    constructor(createNewCustomerAccount: CreateNewCustomerAccount) {
        this.createNewCustomerAccount = createNewCustomerAccount;
        
    }

    async submitFormCreateAccount() {
        const account = this.createNewCustomerAccount;
        const user = generateUser();  
        saveUser(user); 

        await account.fieldSignIn.click();
        await account.fieldEmail.click();
        await account.fieldEmail.fill(user.email);
        await account.buttonCreateAccount.click();
        await account.fieldTitle.click();
        await account.fieldFirstName.click();
        await account.fieldFirstName.fill(user.firstName);
        await account.fieldLastName.click();
        await account.fieldLastName.fill(user.lastName);
        await account.fieldPassword.click();
        await account.fieldPassword.fill(user.password);
        await account.fieldDay.selectOption(user.day);
        await account.fieldMonths.selectOption(user.months);
        await account.fieldYears.selectOption(user.years);
        await account.buttonRegister.click();
    };

    async verificaMsgErro(field: string){
        const account = this.createNewCustomerAccount;
        
        const errorMsg = account.page.locator('//div[@class="alert alert-danger"]')
        .filter({hasText: field})
        .getByText(field + ' ' + 'is required.');
        await errorMsg.isVisible();
    };

    async ConfirmarCadastroFeito(){
        const account = this.createNewCustomerAccount;
        await expect(account.page.getByText('Your account has been created.')).toBeVisible();
    };
}

