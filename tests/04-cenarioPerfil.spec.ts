import { test, expect } from '@playwright/test';
import { UserDTO } from '../dto/user_dto';
import { ADRESS } from '../dto/user_dto';
import { CustomerLoginActions  } from '../steps/customerLogin';
import { CustomerLogin } from '../page_objects/customerLogin';
import { ChangeDetailsOfAccount } from '../page_objects/changeDetailsOfAccount';
import { ChangeDetailsActions } from '../steps/changeDetailsOfAccount';
import { CreateAccountActions } from "../steps/createNewUserPage";
import { customerAccount } from "../steps/customerAccount";
import { CreateNewCustomerAccount } from "../page_objects/createNewUserPage";


test.beforeEach(async({page}) => {
  const customerLogin = new CustomerLogin(page);  
  const loginActions = new CustomerLoginActions(customerLogin);  
  await loginActions.PageLogin();

});


test('adicionar meu primeiro endereço', async ({ page }) => {

  const dateTime = Date.now();
  const userDTO: UserDTO = {
      title: 'Mrs',
      firstName: 'Alice',
      lastName: 'Daiane Carolina Lima',
      email: dateTime + 'jm@mailinator.com',
      password: 'goosIlQNU4',
      day: '11',
      months: '5',
      years: '1995',
      newPassword: ' ',
      confirmationPassword: ' ',
      
  }
  const createNewCustomerAccount = new CreateNewCustomerAccount(page);  
  const createAccount = new CreateAccountActions(createNewCustomerAccount);  
  await createAccount.submitFormCreateAccount(userDTO);
  const custumerAccount = new customerAccount(page);
  await custumerAccount.ConfirmarCadastroFeito();

  const changeDetailsOfAccount = new ChangeDetailsOfAccount(page);
  const AddAddressActions = new ChangeDetailsActions(changeDetailsOfAccount);
  
  const Address: ADRESS = {
    phone: '(67) 3667-1917 ',
    mobilePhone: '(67) 98970-4703',
    company: 'Aninha ',
    address: 'Rua Henrique Cyrillo Correa ',
    city: 'RUSSELLVILLE',
    state: '21',
    zip: '82639',
    country: ' ',
    additionalInformation: 'test ',
    newAddress: ' ',
    newPhone:  ' ',
};
  await AddAddressActions.addMyFirstAddress(Address);
});


test('alterar dados do meu endereço', async({page}) => {
  
  const userDTO: UserDTO = {
    title: ' ',
    firstName: ' ',
    lastName: ' ',
    email:'carolina_camila@mailinator.com',
    password: 'goosIlQNU4',
    day: ' ',
    months: ' ',
    years: ' ',
    newPassword: ' ',
    confirmationPassword: ' ',
}

const customerLogin = new CustomerLogin(page);  
const loginActions = new CustomerLoginActions(customerLogin);  

await loginActions.goToLogin(userDTO); 

  const changeDetailsOfAccount = new ChangeDetailsOfAccount(page);
  const ChangeAddressActions = new ChangeDetailsActions(changeDetailsOfAccount);

  const Address: ADRESS = {
    phone: ' ',
    mobilePhone:' ',
    company: ' ',
    address: ' ',
    city: ' ',
    state: ' ',
    zip: ' ',
    country: ' ',
    additionalInformation: ' ',
    newAddress: 'Rua José Paes de Farias',
    newPhone:  '(62) 98900-7349',
};
  await ChangeAddressActions.ChangeDetailsOfAddress(Address);

});


test('alterar dados do meu perfil', async({page}) => {
  
  const dateTime = Date.now();
  const userDTO: UserDTO = {
      title: 'Mrs',
      firstName: 'Alice',
      lastName: 'Daiane Carolina Lima',
      email: dateTime + 'jm@mailinator.com',
      password: 'goosIlQNU4',
      day: '11',
      months: '5',
      years: '1995',
      newPassword: ' ',
      confirmationPassword: ' ',
      
  }
  const createNewCustomerAccount = new CreateNewCustomerAccount(page);  
  const createAccount = new CreateAccountActions(createNewCustomerAccount);  
  await createAccount.submitFormCreateAccount(userDTO);
  const custumerAccount = new customerAccount(page);
  await custumerAccount.ConfirmarCadastroFeito();

  const changeDetailsOfAccount = new ChangeDetailsOfAccount(page);
  const ChangePasswordActions =  new ChangeDetailsActions(changeDetailsOfAccount);

  const userDTO1: UserDTO = {
    title: ' ',
    firstName: ' ',
    lastName: ' ',
    email:' ',
    password: 'goosIlQNU4',
    day: ' ',
    months: ' ',
    years: ' ',
    newPassword: 'test123',
    confirmationPassword: 'test123',

};
  await ChangePasswordActions.ChangeDetailsOfProfile(userDTO1);
});

