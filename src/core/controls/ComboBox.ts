import { Locator } from '@playwright/test';
import { BaseControl } from './BaseControl';

export class ComboBox extends BaseControl {
  constructor(locator: Locator) {
    super(locator);
  }
}
