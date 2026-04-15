import { test as base } from '@playwright/test';
import { ResultModalAssertions } from '../../src/assertions/ResultModalAssertions';
import { PracticeFormPageService } from '../../src/services/PracticeFormPageService';

type PracticeFormPageFixture = {
  practiceFormService: PracticeFormPageService;
  resultModalAssertions: ResultModalAssertions;
};

export const test = base.extend<PracticeFormPageFixture>({
  practiceFormService: async ({ page }, use) => {
    const service = new PracticeFormPageService(page);
    await service.init();
    await use(service);
  },

  resultModalAssertions: async ({ page }, use) => {
    await use(new ResultModalAssertions());
  },
});

export { expect } from '@playwright/test';
