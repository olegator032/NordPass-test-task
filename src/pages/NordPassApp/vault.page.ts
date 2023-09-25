import Page from "../page.js";

class VaultClass extends Page {
  public get allItemsCategoryButton() {
    return $("//*[@data-testid='sidebar_categories_all-items']");
  }
}

export const VaultPage = new VaultClass();