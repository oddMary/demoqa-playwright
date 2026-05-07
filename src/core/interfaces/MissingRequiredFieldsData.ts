import { PracticeFormData } from './PracticeFormData';

export type NegativeCaseExpectedBehavior =
  | 'reject_and_mark_invalid'
  | 'accept_with_mobile_normalization';

export interface MissingRequiredFieldData {
  title: string;
  formData: PracticeFormData;
  missingField: 'firstName' | 'lastName' | 'gender' | 'mobileNumber';
  expectedBehavior?: NegativeCaseExpectedBehavior;
  expectedMobileNumberInResult?: string;
}
