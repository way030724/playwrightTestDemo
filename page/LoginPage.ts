import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly btnLogin: Locator = this.page.locator('//a[@id="s-top-loginbtn"]');
  readonly btnNetDisk: Locator = this.page.locator('//div[@id="s-top-left"]//a[text()="网盘"]');

  readonly inputUserName: Locator = this.page.locator('//input[@name="userName"]');
  readonly inputPassword: Locator = this.page.locator('//input[@name="password" and @placeholder="密码"]');
  readonly dialogBtnLogin: Locator = this.page.locator('//input[@type="submit"] and @value="登录"]');

  async clickBtnLogin() {
    await this.btnLogin.click();
    await this.page.waitForTimeout(1000);
  }

  async clickBtnNetDisk() {
    await this.btnNetDisk.click();
    await this.page.waitForTimeout(1000);
  }

  async doLogin(name: string, password: string) {
    await this.btnLogin.click();
    await this.inputUserName.click();
    await this.inputUserName.clear();
    await this.inputUserName.fill(name);
    await this.inputPassword.click();
    await this.inputPassword.clear();
    await this.inputPassword.fill(password);
    await this.dialogBtnLogin.click();
  }
}
