import { expect } from '@playwright/test';
import { ResultModal } from '../pages/ResultModal';

export class ResultModalAssertions {
  async shouldShowResultModal(resultModal: ResultModal, message: string): Promise<void> {
    const result = await resultModal.resultModalWindowAppeared();
    expect(result, message).toBeTruthy();
  }
}
