import { expect, test } from "@playwright/test";
import { UserDTO } from "./dto/user_dto";
import { CustomerLogin } from "./functions/customerLogin";


test.beforeEach(async ({ page }) => {
    await page.goto('http://www.automationpractice.pl/index.php?controller=authentication');
});



test ('Login com sucesso', async ({page}) => {

    const userDTO: UserDTO = {
        firstName: ' ',
        lastName: ' ',
        email:'valentina_tatiane_dapaz@mailinator.com',
        password: 'goosIlQNU4',
        day: ' ',
        months: ' ',
        years: ' ',
    }

    const login = new CustomerLogin(page);
    await login.goToLogin(userDTO);
    
});

