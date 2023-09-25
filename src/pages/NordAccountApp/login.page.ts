import Page from "../page.js";

class NordAccountLoginClass extends Page {

  public get emailInputField() {
    return $("//input[@data-testid='identifier-input']");
  }
}

  export const NordAccountLoginPage = new NordAccountLoginClass(); 