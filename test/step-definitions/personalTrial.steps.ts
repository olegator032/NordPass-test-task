import { When, Then } from '@wdio/cucumber-framework';
import { urlContains } from 'wdio-wait-for';
import { FrontPage } from '../../src/pages/FrontPage/front.page.js';


When(/^I click on personal button$/, async () => {
    await FrontPage.goToPersonalSignUpButton.click();
    await browser.waitUntil(urlContains("/personal-password-manager"));
});

When(/^I click on start free trial$/, async () => {
    await FrontPage.startFreeTrialButton.click();
    await browser.waitUntil(urlContains("/try-premium"));
});

When(/^I enter my trial email: "([^"]*)?"$/, async (email: string) => {
    await FrontPage.enterTrialEmailInputField.setValue(email);
    await FrontPage.getStartedButton.click();
});

Then(/^I am downloading nord pass app$/,async () => {
    await browser.waitUntil(urlContains("/downloading"));
});


