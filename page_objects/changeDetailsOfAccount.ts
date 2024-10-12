import {Locator, Page, expect} from "@playwright/test";

export class ChangeDetailsOfAccount {
    page: Page;
    fieldAddress: Locator;
    fieldCity: Locator;
    menuAddMyFirstAddress: Locator;
    fieldCompany: Locator;
    fieldState: Locator;
    fieldZip: Locator;
    fieldHomePhone: Locator;
    fieldMobilePhone: Locator;
    fieldAdditionalInformation: Locator;
    fieldButtonSave: Locator;
    fieldBackTo: Locator;
    menuMyAddresses: Locator;
    menuMyPersonalInformation: Locator;
    fieldCurrentPassword: Locator;
    fieldNewPassword: Locator;
    fieldConfirmationPassword: Locator;
    fieldUpdateAddress: Locator;

    constructor(page : Page){
        this.page = page;
        this.fieldUpdateAddress = this.page.getByRole('link', { name: 'Update ' });
        this.fieldAddress = this.page.getByLabel('Address *');
        this.fieldCity = this.page.getByLabel('City *');
        this.menuAddMyFirstAddress = this.page.getByRole('link', { name: ' Add my first address' });
        this.fieldCompany = this.page.getByLabel('Company');
        this.fieldState = this.page.getByLabel('State *');
        this.fieldZip = this.page.getByLabel('Zip/Postal Code *');
        this.fieldHomePhone = this.page.getByLabel('Home phone **');
        this.fieldMobilePhone = this.page.getByLabel('Mobile phone **');
        this.fieldAdditionalInformation = this.page.getByLabel('Additional information');
        this.fieldButtonSave = this.page.getByRole('button', { name: 'Save ' });
        this.fieldBackTo = this.page.getByRole('link', { name: ' Back to your account' });
        this.menuMyAddresses = this.page.getByRole('link', { name: ' My addresses' });
        this.menuMyPersonalInformation = this.page.getByRole('link', { name: ' My personal information' });
        this.fieldCurrentPassword = this.page.getByLabel('Current Password');
        this.fieldNewPassword = this.page.getByLabel('New Password');
        this.fieldConfirmationPassword = this.page.getByLabel('Confirmation');

    }
}
