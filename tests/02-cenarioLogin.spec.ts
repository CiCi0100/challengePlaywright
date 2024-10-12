import { expect, test } from "@playwright/test";
import { UserDTO } from "../dto/user_dto";
import { CustomerLoginActions  } from "../steps/customerLogin";
import { CustomerLogin } from '../page_objects/customerLogin';


test.beforeEach(async ({ page }) => {
    const customerLogin = new CustomerLogin(page);  
    const loginActions = new CustomerLoginActions(customerLogin);  
    await loginActions.PageLogin();
});


test ('Login com sucesso', async ({page}) => {

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
    }

    const customerLogin = new CustomerLogin(page);  
    const loginActions = new CustomerLoginActions(customerLogin);  

    await loginActions.goToLogin(userDTO); 
    
});

