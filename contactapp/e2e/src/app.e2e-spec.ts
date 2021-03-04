import { browser, by, element, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should have brand name as Contact App', async () => {
    await page.navigateTo('/');
    expect(await page.getTextById('brand')).toEqual('Contact App');
  });

  it('Login page should have login text', async () => {
    await page.navigateTo('/login');
    expect(await page.getTextById('login-heading')).toEqual('Login');
  });

  it('Should login successfully', async () => {
    await page.navigateTo('/login');
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('password');
    element(by.id('btnLogin')).click();
    await page.sleep(2000);
    expect(await page.getTextById('contact-heading')).toEqual('Contact List');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
