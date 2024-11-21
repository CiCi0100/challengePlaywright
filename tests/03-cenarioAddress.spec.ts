import { test, expect } from '@playwright/test';

import { CreateNewCustomerAccount } from "../page_objects/PageSignIn";
import { ChangeDetailsOfAccount } from '../page_objects/detailsOfAccount';

import { CreateAccountActions } from "../steps/createUser";
import { CustomerLoginActions  } from '../steps/login';
import { ChangeDetailsActions } from '../steps/changeDetailsOfAccount';


test.beforeEach(async ({ page }) => {
  const createNewCustomerAccount = new CreateNewCustomerAccount(page); 
  await createNewCustomerAccount.page.goto('http://www.automationpractice.pl/index.php?');
});


test('adicionar meu primeiro endereço', async ({ page }) => {
  
  test.setTimeout(120000);
  const createNewCustomerAccount = new CreateNewCustomerAccount(page);  
  const createAccount = new CreateAccountActions(createNewCustomerAccount);  
  await createAccount.submitFormCreateAccount();
  await createAccount.ConfirmarCadastroFeito();

  const changeDetailsOfAccount = new ChangeDetailsOfAccount(page);
  const AddAddressActions = new ChangeDetailsActions(changeDetailsOfAccount);
  
  await AddAddressActions.addMyFirstAddress();
});


test('alterar dados do meu endereço', async({page}) => {

  test.setTimeout(120000);
  const customerLogin = new CreateNewCustomerAccount(page);  
  const loginActions = new CustomerLoginActions(customerLogin);  
  await loginActions.login(); 

  const changeDetailsOfAccount = new ChangeDetailsOfAccount(page);
  const ChangeAddress = new ChangeDetailsActions(changeDetailsOfAccount);
  
  await ChangeAddress.ChangeDetailsOfAddress();
  
  });


