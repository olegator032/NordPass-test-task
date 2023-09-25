import Page from "../page.js";

class LoginClass extends Page {
  public get entryLoginButton() {
    return $("//*[contains(text(), 'Log In')]");
  }

  public get emailInputField() {
    return $("#email");
  }

  public get continueButton() {
    return $("//*[contains(text(), 'Continue')]");
  }

  public get passwordInputField() {
    return $("//input[@data-testid='signin-password-input']");
  }

  public get innerLoginButton() {
    return $("//*[contains(text(), 'Log in')]");
  }

  public get masterPasswordInputField() {
    return $("//input[@data-testid='password-input']");
  }

  public get unlockNordPassButton() {
    return $("//button[@data-testid='unlock-button']");
  }
}

export const LoginPage = new LoginClass(); 