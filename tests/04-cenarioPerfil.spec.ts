import { test, expect } from '@playwright/test';
import { UserDTO } from '../dto/user_dto';
import { ADRESS } from '../dto/user_dto';
import { CustomerLoginActions  } from '../steps/customerLogin';
import { CustomerLogin } from '../page_objects/customerLogin';
import { ChangeDetailsOfAccount } from '../page_objects/changeDetailsOfAccount';
import { ChangeDetailsActions } from '../steps/changeDetailsOfAccount';


test.beforeEach(async({page}) => {
  const customerLogin = new CustomerLogin(page);  
  const loginActions = new CustomerLoginActions(customerLogin);  
  await loginActions.PageLogin();
  
  const userDTO: UserDTO = {
    title: ' ',
    firstName: ' ',
    lastName: ' ',
    email:'brenda.debora@mailinator.com',
    password: 'test123',
    day: ' ',
    months: ' ',
    years: ' ',
    newPassword: ' ',
    confirmationPassword: ' ',

};

  await loginActions.goToLogin(userDTO);

});


test('adicionar meu primeiro endereço', async ({ page }) => {
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
  const changeDetailsOfAccount = new ChangeDetailsOfAccount(page);
  const ChangePasswordActions =  new ChangeDetailsActions(changeDetailsOfAccount);

  const userDTO: UserDTO = {
    title: ' ',
    firstName: ' ',
    lastName: ' ',
    email:' ',
    password: 'test123',
    day: ' ',
    months: ' ',
    years: ' ',
    newPassword: 'goosIlQNU4',
    confirmationPassword: 'goosIlQNU4',

};
  await ChangePasswordActions.ChangeDetailsOfProfile(userDTO);
});

