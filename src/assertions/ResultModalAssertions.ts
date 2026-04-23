import { expect } from '@playwright/test';
import { ResultModal } from '../pages/ResultModal';
import { ResultTableData } from '../core/interfaces/ResultFormData';

export class ResultModalAssertions {
  resultModal: ResultModal;

  constructor(resultModal: ResultModal) {
    this.resultModal = resultModal;
  }

  async shouldShowResultModal(resultModal: ResultModal, message: string): Promise<void> {
    const result = await resultModal.resultModalWindowAppeared();
    expect(result, message).toBeTruthy();
  }

  async shouldNotShowResultModal(resultModal: ResultModal, message: string): Promise<void> {
    const result = await resultModal.resultModalWindowAppeared();
    expect(result, message).toBeFalsy();
  }

  async shouldShowAppropriateCellText(result: ResultTableData[], message: string): Promise<void> {
    for (const data of result) {
      const actual = await this.resultModal.getCellText(data.label);
      expect(actual, message).toBe(data.value);
    }
  }

  async mandatoryFieldsMarkedInvalid(result: ResultTableData[], message: string): Promise<void> {}

  // await expect(practiceFormPage.firstNameInput).toHaveClass(/invalid|error/);

  //   await expect(practiceFormPage.lastNameInput).toHaveClass(/invalid|error/);

  //   await expect(practiceFormPage.genderMaleRadio).toHaveClass(/invalid|error/);

  //   await expect(practiceFormPage.mobileNumberInput).toHaveClass(/invalid|error/);
}
