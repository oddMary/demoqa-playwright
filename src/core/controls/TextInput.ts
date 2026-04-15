import { Locator } from '@playwright/test';
import { BaseControl } from './BaseControl';

export class TextInput extends BaseControl {
  constructor(locator: Locator) {
    super(locator);
  }
}
