import { CustomerLogin } from "../page_objects/customerLogin";
import { UserDTO } from "../dto/user_dto";

export class CustomerLoginActions {
    customerLogin: CustomerLogin;

    constructor(customerLogin : CustomerLogin) {
        this.customerLogin = customerLogin;
}


async PageLogin() {
    const account = this.customerLogin;
    await account.page.goto('http://www.automationpractice.pl/index.php?controller=authentication');
};


    async goToLogin(userDTO: UserDTO){
        const account = this.customerLogin;

        await account.emailLogin.fill(userDTO.email);
        await account.passwordLogin.fill(userDTO.password);
        for (let i = 0; i < 2; i++) {
            await account.signInButton.click();
          }
    };
}

