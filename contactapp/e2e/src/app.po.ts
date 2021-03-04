import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(url: string): Promise<unknown> {
    return browser.get(url);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }

  async getTextById(id): Promise<string> {
    return element(by.id(id)).getText();
  }

  async sleep(time): Promise<unknown> {
    return browser.sleep(time);
  }
}
