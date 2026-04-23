import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { TableCell } from '../core/controls/TableCell';

export class ResultModal extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private get resultModal() {
    return this.page.locator('.modal-content');
  }

  private getCellByLabel(label: string): TableCell {
    const cell = this.page
      .locator('tr', {
        has: this.page.locator('td', { hasText: label }),
      })
      .locator('td')
      .nth(1);

    return new TableCell(cell);
  }

  async resultModalWindowAppeared(): Promise<boolean> {
    try {
      return this.resultModal.isVisible();
    } catch (error) {
      return false;
    }
  }

  async getCellText(text: string): Promise<string> {
    return this.getCellByLabel(text).getText();
  }

  async shouldShowFormLabel(): Promise<void> {
    await expect(
      this.page.getByRole('heading', {
        name: 'Thanks for submitting the form',
      }),
    ).toBeVisible();
  }
}
