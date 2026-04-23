import { PracticeFormData } from './PracticeFormData';

export interface MissingRequiredFieldData {
  title: string;
  formData: PracticeFormData;
  missingField: 'firstName' | 'lastName' | 'gender' | 'mobileNumber';
}
