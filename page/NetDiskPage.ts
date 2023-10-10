import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class NetDiskPage extends BasePage {
  readonly btnNetDiskLogin: Locator = this.page.locator('//button//span[contains(text(), "去登录")]');
  readonly dialogNetDiskLogin: Locator = this.page.locator('//div[@id="passport-login-pop-dialog"]');
}
