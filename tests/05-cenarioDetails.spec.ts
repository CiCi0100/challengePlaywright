import { test, expect } from '@playwright/test';

import { ChangeDetailsOfAccount } from '../page_objects/detailsOfAccount';
import { CreateAccountActions } from "../steps/createUser";
import { CreateNewCustomerAccount } from "../page_objects/PageSignIn";
import { ChangeDetailsActions } from '../steps/changeDetailsOfAccount';


test.beforeEach(async ({ page }) => {
  const createNewCustomerAccount = new CreateNewCustomerAccount(page); 
  await createNewCustomerAccount.page.goto('http://www.automationpractice.pl/index.php?');
});


test('alterar dados do meu perfil', async({page}) => {

    const createNewCustomerAccount = new CreateNewCustomerAccount(page);  
    const createAccount = new CreateAccountActions(createNewCustomerAccount);  
    await createAccount.submitFormCreateAccount();
    await createAccount.ConfirmarCadastroFeito();

        const changeDetailsOfAccount = new ChangeDetailsOfAccount(page);
        const ChangePasswordActions =  new ChangeDetailsActions(changeDetailsOfAccount);
      
        await ChangePasswordActions.ChangeDetailsOfProfile();
      });
      
      