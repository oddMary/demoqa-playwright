import { expect } from '@playwright/test';
import { MissingRequiredFieldData } from '../core/interfaces/MissingRequiredFieldsData';
import { PracticeFormPage } from '../pages/PracticeFormPage';
import { ResultModal } from '../pages/ResultModal';
import { Logger } from '../core/logger';

export class PracticeFormAssertions {
  private readonly practiceFormPage: PracticeFormPage;

  constructor(practiceFormPage: PracticeFormPage) {
    this.practiceFormPage = practiceFormPage;
  }

  // async shouldRejectSubmissionAndMarkRequiredFieldInvalid(
  //   resultModal: ResultModal,
  //   missingField: MissingRequiredFieldData['missingField'],
  //   message: string,
  // ): Promise<void> {
  //   Logger.step(`Validating rejection when required field "${missingField}" is missing`);

  //   const modalVisible = await resultModal.resultModalWindowAppeared();
  //   expect(modalVisible, message).toBeFalsy();

  //   const invalid = await this.practiceFormPage.isRequiredFieldMarkedInvalid(missingField);
  //   expect(invalid, message).toBeTruthy();
  // }
}
