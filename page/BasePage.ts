import { Page } from '@playwright/test';
import path from 'path';

export class BasePage {
  public page: Page;
  public testDataPath: string = path.join(__dirname, '../testData');

  constructor(page: Page) {
    this.page = page;
  }

  // refresh the page
  async refreshPage() {
    await this.page.reload();
  }

  // goto url
  async openUrl(url: string) {
    await this.page.goto(url);
  }
}
