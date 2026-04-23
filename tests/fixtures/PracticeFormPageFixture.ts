import { test as base } from '@playwright/test';
import { ResultModalAssertions } from '../../src/assertions/ResultModalAssertions';
import { PracticeFormPageService } from '../../src/services/PracticeFormPageService';
import { ResultModal } from '../../src/pages/ResultModal';

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
    await use(new ResultModalAssertions(new ResultModal(page)));
  },
});

export { expect } from '@playwright/test';
