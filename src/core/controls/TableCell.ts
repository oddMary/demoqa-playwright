import { Locator } from '@playwright/test';
import { BaseControl } from './BaseControl';

export class TableCell extends BaseControl {
  constructor(locator: Locator) {
    super(locator);
  }

  async getCellText(): Promise<string> {
    return this.locator.innerText();
  }
}
