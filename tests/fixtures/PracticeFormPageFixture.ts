import { test as base } from '@playwright/test';
import { PracticeFormAssertions } from '../../src/assertions/PracticeFormAssertions';
import { ResultModalAssertions } from '../../src/assertions/ResultModalAssertions';
import { PracticeFormPageService } from '../../src/services/PracticeFormPageService';
import { ResultModal } from '../../src/pages/ResultModal';
import { Logger } from '../../src/core/logger';
import fs from 'fs';
import path from 'path';

const logDir = path.resolve(process.cwd(), 'logs');
const logFile = path.join(logDir, 'test.log');

type PracticeFormPageFixture = {
  practiceFormService: PracticeFormPageService;
  practiceFormAssertions: PracticeFormAssertions;
  resultModalAssertions: ResultModalAssertions;
};

export const test = base.extend<PracticeFormPageFixture>({
  practiceFormService: async ({ page }, use) => {
    const service = new PracticeFormPageService(page);
    await service.init();
    await use(service);
  },

  practiceFormAssertions: async ({ practiceFormService }, use) => {
    await use(new PracticeFormAssertions(practiceFormService.getFormPage()));
  },

  resultModalAssertions: async ({ page }, use) => {
    await use(new ResultModalAssertions(new ResultModal(page)));
  },
});

test.beforeAll(() => {
  fs.mkdirSync(logDir, { recursive: true });
  fs.writeFileSync(logFile, ''); // ✅ всегда чисто
});

test.afterEach(async ({}, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    Logger.step(`TEST FAILED: ${testInfo.title}`);

    if (testInfo.error) {
      Logger.step(`Error: ${testInfo.error.message}`);
    }
  }
});

export { expect } from '@playwright/test';
