import { expect, test, Page } from "@playwright/test";
import { CreateNewCustomerAccount } from "../page_objects/PageSignIn";
import { CreateAccountActions } from "../steps/createUser";
import { CustomerLoginActions  } from "../steps/login";


test.beforeEach(async ({ page }) => {
    const createNewCustomerAccount = new CreateNewCustomerAccount(page); 
    await createNewCustomerAccount.page.goto('http://www.automationpractice.pl/index.php?');
});


test ('Cadastrar novo usuário', async ({ page }) => {

    const createNewCustomerAccount = new CreateNewCustomerAccount(page);  
    const createAccount = new CreateAccountActions(createNewCustomerAccount);  
    await createAccount.submitFormCreateAccount();;
    await createAccount.ConfirmarCadastroFeito();

});


test ('Login com sucesso', async ({page}) => {

    const customerLogin = new CreateNewCustomerAccount(page);  
    const loginActions = new CustomerLoginActions(customerLogin);  

    await loginActions.login(); 
    
});




// test ('Validar campos obrigatórios', async ({page}) => {
//     const dateTime = Date.now();
//     const userDTO: UserDTO = {
//         title: 'Mrs',
//         firstName:'',
//         lastName: '',
//         email: dateTime + 'jm@mailinator.com',
//         password: '12',
//         day: '11',
//         months: '5',
//         years: '1995',
//         newPassword: ' ',
//         confirmationPassword: ' ',
//     }

//     const createNewCustomerAccount = new CreateNewCustomerAccount(page);  
//     const createAccount = new CreateAccountActions(createNewCustomerAccount);  
//     await createAccount.submitFormCreateAccount(userDTO);
//     await createAccount.verificaMsgErro('First Name');
//     await createAccount.verificaMsgErro('Last Name');
// });

