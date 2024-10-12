import { ChangeDetailsOfAccount } from "../page_objects/changeDetailsOfAccount";
import { UserDTO } from "../dto/user_dto";
import { ADRESS } from "../dto/user_dto";

export class ChangeDetailsActions {
    changeDetailsOfAccount: ChangeDetailsOfAccount;

    constructor(changeDetailsOfAccount: ChangeDetailsOfAccount) {
        this.changeDetailsOfAccount = changeDetailsOfAccount;
    }

    async addMyFirstAddress (Address : ADRESS) {
        const account = this.changeDetailsOfAccount;

        await account.menuAddMyFirstAddress.click();
        await account.fieldAddress.click();
        await account.fieldAddress.fill(Address.address);
        await account.fieldCity.click();
        await account.fieldCity.fill(Address.city);
        await account.fieldCompany.click();
        await account.fieldCompany.fill(Address.company);
        await account.fieldState.selectOption(Address.state);
        await account.fieldZip.click();
        await account.fieldZip.fill(Address.zip);
        await account.fieldHomePhone.click();
        await account.fieldHomePhone.fill(Address.phone);
        await account.fieldMobilePhone.click();
        await account.fieldMobilePhone.fill(Address.mobilePhone);
        await account.fieldAdditionalInformation.click();
        await account.fieldAdditionalInformation.fill(Address.additionalInformation);
        await account.fieldButtonSave.click();

    }

    async ChangeDetailsOfAddress (Address : ADRESS) {
        const account = this.changeDetailsOfAccount;

        await account.menuMyAddresses.click();
        await account.fieldUpdateAddress.click();
        await account.fieldAddress.click();
        await account.fieldAddress.fill(Address.newAddress);
        await account.fieldMobilePhone.click();
        await account.fieldMobilePhone.fill(Address.newPhone);
        await account.fieldButtonSave.click();

    }

    async ChangeDetailsOfProfile (ChangesUser : UserDTO) {
        const account = this.changeDetailsOfAccount;

        await account.menuMyPersonalInformation.click();
        await account.fieldCurrentPassword.click();
        await account.fieldCurrentPassword.fill(ChangesUser.password);
        await account.fieldNewPassword.click();
        await account.fieldNewPassword.fill(ChangesUser.newPassword);
        await account.fieldConfirmationPassword.click();
        await account.fieldConfirmationPassword.fill(ChangesUser.confirmationPassword);
        await account.fieldButtonSave.click();
    }
}