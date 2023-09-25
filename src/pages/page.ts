import { BASE_URL } from "../data/urls.js";

export default class Page {
  public async nordpass(path: string) {
    return browser.url(`${BASE_URL}${path}`);
  }
}
