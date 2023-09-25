import { Given} from '@wdio/cucumber-framework';
import { BASE_URL } from '../../src/data/urls.js';

Given(/^I am on the home page$/, async () => {
    await browser.url(BASE_URL);
});