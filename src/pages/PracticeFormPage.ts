import { Page } from '@playwright/test';
import { LabelControl } from '../core/controls/LabelControl';
import { BasePage } from './BasePage';
import { TextInput } from '../core/controls/TextInput';
import { RadioButton } from '../core/controls/RadioButton';
import { Checkbox } from '../core/controls/Checkbox';
import { FileUpload } from '../core/controls/FileUpload';
import { Button } from '../core/controls/Button';
import { ComboBox } from '../core/controls/Combobox';

export class PracticeFormPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  //Selectors
  private get formNameLabel(): LabelControl {
    return new LabelControl(this.page.getByRole('heading', { name: 'Practice Form' }));
  }

  private get studentRegistrationFormLabel(): LabelControl {
    return new LabelControl(this.page.getByRole('heading', { name: 'Student Registration Form' }));
  }

  private get firstNameInput(): TextInput {
    return new TextInput(this.page.locator('#firstName'));
  }

  private get lastNameInput(): TextInput {
    return new TextInput(this.page.locator('#lastName'));
  }

  private get userEmailInput(): TextInput {
    return new TextInput(this.page.locator('#userEmail'));
  }

  private get maleGenderRadioButton(): RadioButton {
    return new RadioButton(this.page.locator('#gender-radio-1'));
  }

  private get femaleGenderRadioButton(): RadioButton {
    return new RadioButton(this.page.locator('#gender-radio-2'));
  }

  private get otherGenderRadioButton(): RadioButton {
    return new RadioButton(this.page.locator('#gender-radio-3'));
  }

  private get mobileNumberInput(): TextInput {
    return new TextInput(this.page.locator('#userNumber'));
  }

  private get dateOfBirthInput(): TextInput {
    return new TextInput(this.page.locator('#dateOfBirthInput'));
  }

  private get subjectsInput(): TextInput {
    return new TextInput(this.page.locator('#subjectsInput'));
  }

  private get sportsCheckbox(): Checkbox {
    return new Checkbox(this.page.locator('#hobbies-checkbox-1'));
  }

  private get readingCheckbox(): Checkbox {
    return new Checkbox(this.page.locator('#hobbies-checkbox-2'));
  }

  private get musicCheckbox(): Checkbox {
    return new Checkbox(this.page.locator('#hobbies-checkbox-3'));
  }

  private get fileUploadImput(): FileUpload {
    return new FileUpload(this.page.locator('#uploadPicture'));
  }

  private get currentAddressInput(): TextInput {
    return new TextInput(this.page.locator('#currentAddress'));
  }

  private get selectStateComboBox(): ComboBox {
    return new ComboBox(this.page.locator('#state'));
  }

  private get selectCityComboBox(): ComboBox {
    return new ComboBox(this.page.locator('#city'));
  }

  private get submitFormButton(): Button {
    return new Button(this.page.getByRole('button', { name: 'Submit' }));
  }

  async goToPracticeFormPage(): Promise<PracticeFormPage> {
    await this.page.goto('https://demoqa.com/automation-practice-form', {
      waitUntil: 'domcontentloaded',
    });
    return new PracticeFormPage(this.page);
  }

  async setFirstName(firstName: string): Promise<PracticeFormPage> {
    await this.firstNameInput.fillText(firstName);
    return this;
  }

  async setLastName(lastName: string): Promise<PracticeFormPage> {
    await this.lastNameInput.fillText(lastName);
    return this;
  }

  async setUserEmail(email: string): Promise<PracticeFormPage> {
    await this.userEmailInput.fillText(email);
    return this;
  }

  async selectGender(gender: string): Promise<PracticeFormPage> {
    switch (gender) {
      case 'Male':
        await this.maleGenderRadioButton.click();
        return this;
      case 'Female':
        await this.femaleGenderRadioButton.click();
        return this;
      case 'Other':
        await this.otherGenderRadioButton.click();
        return this;
      default:
        throw new Error(`Unknown gender: ${gender}`);
    }
  }

  async setMobileNumber(mobileNumber: string): Promise<PracticeFormPage> {
    await this.mobileNumberInput.fillText(mobileNumber);
    return this;
  }

  async setDateOfBirth(dateOfBirth: string): Promise<PracticeFormPage> {
    await this.dateOfBirthInput.fillText(dateOfBirth);
    await this.page.keyboard.press('Escape');
    return this;
  }

  async setSubject(subject: string): Promise<PracticeFormPage> {
    await this.subjectsInput.fillText(subject);
    await this.page.getByText(subject, { exact: true }).click();
    return this;
  }

  async selectHobby(hobby: string): Promise<PracticeFormPage> {
    switch (hobby) {
      case 'Sports':
        await this.sportsCheckbox.click();
        return this;
      case 'Reading':
        await this.readingCheckbox.click();
        return this;
      case 'Music':
        await this.musicCheckbox.click();
        return this;
      default:
        throw new Error(`Unknown gender: ${hobby}`);
    }
  }

  async uploadPicture(picturePath: string): Promise<PracticeFormPage> {
    await this.fileUploadImput.setPicturePath(picturePath);
    return this;
  }

  async setAddress(address: string): Promise<PracticeFormPage> {
    await this.currentAddressInput.fillText(address);
    return this;
  }

  async selectState(state: string): Promise<PracticeFormPage> {
    await this.selectStateComboBox.selectFromCombobox(state);
    return this;
  }

  async selectCity(city: string): Promise<PracticeFormPage> {
    await this.selectCityComboBox.selectFromCombobox(city);
    return this;
  }

  async submitStudentRegistrationForm(): Promise<void> {
    await this.submitFormButton.click();
  }
}
