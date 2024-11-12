import { ChangeDetailsOfAccount } from "../page_objects/detailsOfAccount";
import { loadUserFromFile } from '../src/gerador';


export class ChangeDetailsActions {
    changeDetailsOfAccount: ChangeDetailsOfAccount;

    constructor(changeDetailsOfAccount: ChangeDetailsOfAccount) {
        this.changeDetailsOfAccount = changeDetailsOfAccount;
    }

    async addMyFirstAddress () {
        const account = this.changeDetailsOfAccount;
        const user = loadUserFromFile();
        console.log("Dados do usuário:", user);

        await account.menuAddMyFirstAddress.waitFor({ state: 'visible' });
        await account.menuAddMyFirstAddress.click();
        await account.fieldAddress.click();
        await account.fieldAddress.fill(user.address);
        await account.fieldCity.click();
        await account.fieldCity.fill(user.city);
        await account.fieldCompany.click();
        await account.fieldCompany.fill(user.company);
        await account.fieldState.selectOption(user.state);
        await account.fieldZip.click();
        await account.fieldZip.fill(user.zip);
        await account.fieldHomePhone.click();
        await account.fieldHomePhone.fill(user.phone);
        await account.fieldMobilePhone.click();
        await account.fieldMobilePhone.fill(user.mobilePhone);
        await account.fieldAdditionalInformation.click();
        await account.fieldAdditionalInformation.fill(user.additionalInformation);
        await account.fieldButtonSave.click();

    }

    async ChangeDetailsOfAddress () {
        const account = this.changeDetailsOfAccount;
        const user = loadUserFromFile();

        await account.menuMyAddresses.waitFor({ state: 'visible' });
        await account.menuMyAddresses.click();
        await account.fieldUpdateAddress.click();
        await account.fieldAddress.click();
        await account.fieldAddress.fill(user.newAddress);
        await account.fieldMobilePhone.click();
        await account.fieldMobilePhone.fill(user.newPhone);
        await account.fieldButtonSave.click();

    }

    async ChangeDetailsOfProfile () {
        const account = this.changeDetailsOfAccount;
        const user = loadUserFromFile();

        await account.menuMyPersonalInformation.waitFor({ state: 'visible' });
        await account.menuMyPersonalInformation.click();
        await account.fieldCurrentPassword.click();
        await account.fieldCurrentPassword.fill(user.password);
        await account.fieldNewPassword.click();
        await account.fieldNewPassword.fill(user.newPassword);
        await account.fieldConfirmationPassword.click();
        await account.fieldConfirmationPassword.fill(user.newPassword);
        await account.fieldButtonSave.click();
    }
}