import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ResultModal extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private get resultModal() {
    return this.page.locator('.modal-content');
  }

  async resultModalWindowAppeared(): Promise<boolean> {
    try {
      return this.resultModal.isVisible();
    } catch (error) {
      return false;
    }
  }
}
