import { When, Then } from '@wdio/cucumber-framework';
import { urlContains, urlIs } from 'wdio-wait-for';
import { APP_URLS } from '../../src/data/urls.js';
import { LoginPage } from '../../src/pages/Login/login.page.js';
import { FrontPage } from '../../src/pages/FrontPage/front.page.js';
import { VaultPage } from '../../src/pages/NordPassApp/vault.page.js';

When(/^I go to login flow$/, async () => {
    await FrontPage.loginDropdown.moveTo();
    await FrontPage.accessMyPasswordsButton.click();
    await browser.switchWindow('Web Vault: Access Your Passwords in a Browser | NordPass');
    await browser.waitUntil(urlContains(APP_URLS.LOGIN_PAGE));
    await LoginPage.entryLoginButton.click();
});

When(/^I enter my email: "([^"]*)?"$/, async (email: string) => {
    await LoginPage.emailInputField.setValue(email);
    await LoginPage.continueButton.click();
});

When(/^I enter my user password: "([^"]*)?"$/, async (password: string) => {
    await LoginPage.passwordInputField.setValue(password); 
    await LoginPage.innerLoginButton.click();
});

When(/^I enter my user master password: "([^"]*)?"$/, async (masterpassword: string) => {
    await LoginPage.masterPasswordInputField.setValue(masterpassword); 
    await LoginPage.unlockNordPassButton.click();
});

Then(/^I am logged in into nord pass app$/, async () => {
    await browser.waitUntil(urlIs(APP_URLS.VAULT_PAGE));
    await VaultPage.allItemsCategoryButton; //additional check if page is loaded successfully.
});


