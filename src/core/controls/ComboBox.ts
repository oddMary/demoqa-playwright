import { Locator, Page } from '@playwright/test';
import { BaseControl } from './BaseControl';

export class ComboBox extends BaseControl {
  constructor(locator: Locator) {
    super(locator);
  }

  get input(): Locator {
    return this.locator.getByRole('combobox');
  }

  async selectFromCombobox(value: string): Promise<void> {
    await this.locator.click();
    await this.locator.getByText(value, { exact: true }).click();
  }
}
