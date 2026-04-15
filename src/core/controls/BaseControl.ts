import { Locator } from '@playwright/test';

export class BaseControl {
  protected readonly locator;

  constructor(locator: Locator) {
    this.locator = locator;
  }

  async click(): Promise<void> {
    await this.locator.click();
  }

  async fillText(text: string): Promise<void> {
    await this.locator.fill(text);
  }

  async getText(): Promise<string> {
    const text = await this.locator.innerText();
    return text?.trim();
  }
}
