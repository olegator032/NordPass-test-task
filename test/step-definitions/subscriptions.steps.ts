import { When, Then } from '@wdio/cucumber-framework';
import { urlContains} from 'wdio-wait-for';
import { MY_NORD_ACCOUNT_URLS, NORD_ACCOUNT_URLS } from '../../src/data/urls.js';
import { LoginPage } from '../../src/pages/Login/login.page.js';
import { FrontPage } from '../../src/pages/FrontPage/front.page.js';
import { NordAccountLoginPage } from '../../src/pages/NordAccountApp/login.page.js';
import { NordAccountDashboardPage } from '../../src/pages/NordAccountApp/dashboard.page.js';

When(/^I want to manage my subscriptions$/, async () => {
    await FrontPage.loginDropdown.moveTo();
    await FrontPage.manageMySubscriptionsButton.click();
    await browser.switchWindow('Quick, easy, and secure login with Nord Account.');
    await browser.waitUntil(urlContains(NORD_ACCOUNT_URLS.LOGIN_EMAIL));
});

When(/^I enter my NordAccount email: "([^"]*)?"$/, async (email: string) => {
    await NordAccountLoginPage.emailInputField.setValue(email);
    await LoginPage.continueButton.click();
});

Then(/^I am logged in into my nord account$/, async () => {
    await browser.waitUntil(urlContains(MY_NORD_ACCOUNT_URLS.DASHBOARD));
});

Then(/^I can see services in side panel$/, async () => {
    await browser.waitUntil(urlContains(MY_NORD_ACCOUNT_URLS.DASHBOARD));
    expect(await NordAccountDashboardPage.nordLockerSidebar).toBeDisplayed();
    expect(await NordAccountDashboardPage.nordPassSidebar).toBeDisplayed();
    expect(await NordAccountDashboardPage.nordVpnSidebar).toBeDisplayed();
});

Then(/^I can see upgrade plan button for NordPass$/, async () => {
    expect(await NordAccountDashboardPage.nordPassUpgradePlanButton).toBeDisplayed();
});

