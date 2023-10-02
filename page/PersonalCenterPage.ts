import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class PersonalCenterPage extends BasePage {
  readonly linkHomepage: Locator = this.page.locator('//a[@href="//www.baidu.com/" and contains(text(), "百度首页")]');
}
