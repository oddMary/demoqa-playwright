import { Locator } from '@playwright/test';

export class BaseControl {
  protected readonly locator;

  constructor(locator: Locator) {
    this.locator = locator;
  }

  // async getAttribute(name: string): Promise<string | null> {
  //   return this.locator.getAttribute(name);
  // }

  // async hasClass(className: string): Promise<boolean> {
  //   const klass = await this.getAttribute('class');
  //   if (!klass) return false;
  //   return klass.split(/\s+/).includes(className);
  // }

  // async matchesSelector(selector: string): Promise<boolean> {
  //   return this.locator.evaluate((el, sel) => (el as Element).matches(sel), selector);
  // }

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
