import { Page } from '@playwright/test';
import { PracticeFormData } from '../core/interfaces/PracticeFormData';
import { ResultModal } from '../pages/ResultModal';
import { PracticeFormPage } from '../pages/PracticeFormPage';
import { Logger } from '../core/logger';

export class PracticeFormPageService {
  page: Page;
  practiceFormPage: PracticeFormPage;

  constructor(page: Page) {
    this.page = page;
    this.practiceFormPage = new PracticeFormPage(page);
  }

  async init(): Promise<PracticeFormPage> {
    Logger.step('Opening Practice Form page');

    return await this.practiceFormPage.goToPracticeFormPage();
  }

  async fillForm(data: PracticeFormData): Promise<void> {
    Logger.step('Filling practice form');

    if (data.firstName) {
      await this.practiceFormPage.setFirstName(data.firstName);
    }

    if (data.lastName) {
      await this.practiceFormPage.setLastName(data.lastName);
    }

    if (data.email) {
      await this.practiceFormPage.setUserEmail(data.email);
    }

    if (data.gender) {
      await this.practiceFormPage.selectGender(data.gender);
    }

    if (data.mobileNumber) {
      await this.practiceFormPage.setMobileNumber(data.mobileNumber);
    }

    if (data.dateOfBirth) {
      await this.practiceFormPage.setDateOfBirth(data.dateOfBirth);
    }

    if (data.subjects) {
      for (const subject of data.subjects) {
        await this.practiceFormPage.setSubject(subject);
      }
    }

    if (data.hobbies) {
      for (const hobby of data.hobbies) {
        await this.practiceFormPage.selectHobby(hobby);
      }
    }

    if (data.picturePath) {
      await this.practiceFormPage.uploadPicture(data.picturePath);
    }

    if (data.address) {
      await this.practiceFormPage.setAddress(data.address);
    }

    if (data.state) {
      await this.practiceFormPage.selectState(data.state);
    }

    if (data.city) {
      await this.practiceFormPage.selectCity(data.city);
    }
  }

  async fillAndSubmitForm(data: PracticeFormData): Promise<ResultModal> {
    await this.fillForm(data);

    Logger.step('Submitting practice form');
    await this.practiceFormPage.submitStudentRegistrationForm();

    return new ResultModal(this.page);
  }

  getFormPage(): PracticeFormPage {
    return this.practiceFormPage;
  }
}
