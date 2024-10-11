import { CreateNewCustomerAccount } from '../page_objects/createNewUserPage.ts';
import { UserDTO } from '../dto/user_dto.ts';

export class CreateAccountActions {
    createNewCustomerAccount: CreateNewCustomerAccount;

    constructor(createNewCustomerAccount: CreateNewCustomerAccount) {
        this.createNewCustomerAccount = createNewCustomerAccount;
    }

    async submitFormCreateAccount(userDTO: UserDTO) {
        const account = this.createNewCustomerAccount;

        await account.fieldSignIn.click();
        await account.fieldEmail.click();
        await account.fieldEmail.fill(userDTO.email);
        await account.buttonCreateAccount.click();
        await account.fieldTitle.click();
        await account.fieldFirstName.click();
        await account.fieldFirstName.fill(userDTO.firstName);
        await account.fieldLastName.click();
        await account.fieldLastName.fill(userDTO.lastName);
        await account.fieldPassword.click();
        await account.fieldPassword.fill(userDTO.password);
        await account.fieldDay.selectOption(userDTO.day);
        await account.fieldMonths.selectOption(userDTO.months);
        await account.fieldYears.selectOption(userDTO.years);
        await account.buttonRegister.click();
    };

    async verificaMsgErro(field: string){
        const account = this.createNewCustomerAccount;
        
        const errorMsg = account.page.locator('//div[@class="alert alert-danger"]')
        .filter({hasText: field})
        .getByText(field + ' ' + 'is required.');
        await errorMsg.isVisible();
    };
}

