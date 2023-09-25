import Page from "../page.js";

class NordAccountDashboardClass extends Page {

  public get nordVpnSidebar() {
    return $("//*[@data-testid='Sidebar_nordvpn']");
  }

  public get nordPassSidebar() {
    return $("//*[@data-testid='Sidebar_nordpass']");
  }

  public get nordLockerSidebar() {
    return $("//*[@data-testid='Sidebar_nordlocker']");
  }

  public get nordPassUpgradePlanButton() {
    return $("//*[contains(text(), 'Upgrage plan'])");
  }

}

  export const NordAccountDashboardPage = new NordAccountDashboardClass(); 