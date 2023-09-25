import Page from "../page.js";

class FrontPageClass extends Page {
  public get loginDropdown() {
    return $("//*[@data-testid='header-nav-login-btn']");
  }

  public get accessMyPasswordsButton() {
    return $("//span[contains(text(), 'Access my passwords')]");
  }

  public get manageMySubscriptionsButton() {
    return $("//span[contains(text(), 'Manage my subscription')]");
  }

  public get goToPersonalSignUpButton() {
    return $("//a[contains(text(), 'Personal')]");
  }

  public get startFreeTrialButton() {
    return $("//a[contains(text(), 'Start Free Trial')]");
  }

  public get enterTrialEmailInputField() {
    return $("//input[@name='email']");
  }

  public get getStartedButton() {
    return $("//button[contains(text(), 'Get started')]");
  }

}

export const FrontPage = new FrontPageClass();