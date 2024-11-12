import { expect } from '@playwright/test';
import { CreateNewCustomerAccount } from "../page_objects/PageSignIn";
import { loadUserFromFile } from '../src/gerador';

export class CustomerLoginActions {
    customerLogin: CreateNewCustomerAccount;

    constructor(customerLogin: CreateNewCustomerAccount) {
        this.customerLogin = customerLogin;
    }

    async login() {
        const account = this.customerLogin;
        const user = loadUserFromFile();
        
        await account.fieldSignIn.click();
        await account.emailLogin.fill(user.email);
        await account.passwordLogin.fill(user.password);
        await account.signInButton.click();
        
    }
}
