import { Locator } from '@playwright/test';
import { BaseControl } from './BaseControl';

export class FileUpload extends BaseControl {
  constructor(locator: Locator) {
    super(locator);
  }

  async setPicturePath(filePath: string): Promise<void> {
    await this.locator.setInputFiles(filePath);
  }
}
