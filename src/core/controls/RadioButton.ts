import { Locator } from '@playwright/test';
import { BaseControl } from './BaseControl';

export class RadioButton extends BaseControl {
  constructor(locator: Locator) {
    super(locator);
  }
}
