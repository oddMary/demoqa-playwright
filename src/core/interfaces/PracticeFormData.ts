export interface PracticeFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  gender?: 'Male' | 'Female' | 'Other';
  mobileNumber?: string;
  dateOfBirth?: string;
  subjects?: string[];
  hobbies?: ('Sports' | 'Reading' | 'Music')[];
  picturePath?: string;
  address?: string;
  state?: string;
  city?: string;
}
