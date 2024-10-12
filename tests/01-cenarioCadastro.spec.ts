import { expect, test } from "@playwright/test";
import { CreateAccountActions } from "../steps/createNewUserPage";
import { UserDTO } from "../dto/user_dto";
import { customerAccount } from "../steps/customerAccount";
import { CreateNewCustomerAccount } from "../page_objects/createNewUserPage";
import { BuscaProdutoPage } from '../steps/searchForProduct';


test.beforeEach(async ({ page }) => {
    const buscaProdutoPage= new BuscaProdutoPage(page);
    await buscaProdutoPage.HomePage();
});


test ('Cadastrar novo usuário', async ({ page }) => {
    const dateTime = Date.now();
    const userDTO: UserDTO = {
        title: 'Mrs',
        firstName: 'Alice',
        lastName: 'Daiane Carolina Lima',
        email:'luzia-campos85@mailinator.com',
        password: 'goosIlQNU4',
        day: '11',
        months: '5',
        years: '1995',
        
    }
    const createNewCustomerAccount = new CreateNewCustomerAccount(page);  
    const createAccount = new CreateAccountActions(createNewCustomerAccount);  
    await createAccount.submitFormCreateAccount(userDTO);
    const custumerAccount = new customerAccount(page);
    await custumerAccount.ConfirmarCadastroFeito();

});


test ('Validar campos obrigatórios', async ({page}) => {
    const dateTime = Date.now();
    const userDTO: UserDTO = {
        title: 'Mrs',
        firstName:'',
        lastName: '',
        email: dateTime + 'jm@mailinator.com',
        password: '12',
        day: '11',
        months: '5',
        years: '1995',
    }

    const createNewCustomerAccount = new CreateNewCustomerAccount(page);  
    const createAccount = new CreateAccountActions(createNewCustomerAccount);  
    await createAccount.submitFormCreateAccount(userDTO);
    await createAccount.verificaMsgErro('First Name');
    await createAccount.verificaMsgErro('Last Name');
});

