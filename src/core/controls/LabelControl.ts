import { Locator } from '@playwright/test';
import { BaseControl } from './BaseControl';

export class LabelControl extends BaseControl {
  constructor(locator: Locator) {
    super(locator);
  }
}
