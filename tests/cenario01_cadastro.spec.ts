import { expect, test } from "@playwright/test";
import { CreateNewCustomerAccount } from "./functions/createNewUserPage";
import { UserDTO } from "./dto/user_dto";
import { customerAccount } from "./functions/customerAccount";


test.beforeEach(async ({ page }) => {
    await page.goto('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');

});

test ('Cadastrar novo usuário', async ({ page }) => {
    const dateTime = Date.now();
    const userDTO: UserDTO = {
        firstName: 'Alice',
        lastName: 'Daiane Carolina Lima',
        email:'valentina_tatiane_dapaz@mailinator.com',
        password: 'goosIlQNU4',
        day: '11',
        months: '5',
        years: '1995',
        
    }
const createNewCustumerAccount = new CreateNewCustomerAccount(page);
await createNewCustumerAccount.submitFormCreateAccount(userDTO);
const custumerAccount = new customerAccount(page);
await custumerAccount.ConfirmarCadastroFeito();

});

test ('Validar campos obrigatórios', async ({page}) => {
    const dateTime = Date.now();
    const userDTO: UserDTO = {
        firstName:'',
        lastName: '',
        email: dateTime + 'jm@mailinator.com',
        password: '12',
        day: '11',
        months: '5',
        years: '1995',
    }
const createNewCustumerAccount = new CreateNewCustomerAccount(page);
await createNewCustumerAccount.submitFormCreateAccount(userDTO);
await createNewCustumerAccount.verificaMsgErro('First Name');
await createNewCustumerAccount.verificaMsgErro('Last Name');
});