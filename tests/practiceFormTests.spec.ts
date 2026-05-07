import { expect, test } from './fixtures/PracticeFormPageFixture';
import studentData from '../test-data/student.data.json';
import rawCases from '../test-data/missing-required-fields.cases.json';
import { MissingRequiredFieldData } from '../src/core/interfaces/MissingRequiredFieldsData';

const missingRequiredFieldCases = rawCases as MissingRequiredFieldData[];

test.describe('Positive test scenarios', () => {
  test('01 Submit only mandatory fields', async ({
    practiceFormService,
    resultModalAssertions,
  }) => {
    const result = await practiceFormService.fillAndSubmitForm({
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Male',
      mobileNumber: '1234567890',
    });

    await resultModalAssertions.shouldShowResultModal(
      result,
      'Result modal should be displayed after submitting only mandatory fields',
    );
    await resultModalAssertions.shouldShowAppropriateCellText(
      studentData.mandatoryData,
      'Result table contains incorrect data for mandatory fields submission',
    );
  });

  test('02 Multiple subjects', async ({ practiceFormService, resultModalAssertions }) => {
    const result = await practiceFormService.fillAndSubmitForm({
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Male',
      mobileNumber: '1234567890',
      subjects: ['Maths', 'Physics'],
    });

    await resultModalAssertions.shouldShowResultModal(
      result,
      'Result modal should appear after submitting form with multiple subjec',
    );
    await resultModalAssertions.shouldShowAppropriateCellText(
      studentData.mandatoryDataWithSubjects,
      'Result table contains incorrect subjects data',
    );
  });

  test('03 Multiple hobbies', async ({ practiceFormService, resultModalAssertions }) => {
    const result = await practiceFormService.fillAndSubmitForm({
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Female',
      mobileNumber: '1234567890',
      hobbies: ['Reading', 'Music'],
    });

    await resultModalAssertions.shouldShowResultModal(
      result,
      'Result modal should appear after submitting form with multiple hobbies',
    );
    await resultModalAssertions.shouldShowAppropriateCellText(
      studentData.mandatoryDataWithHobbies,
      'Result table contains incorrect hobbies data',
    );
  });

  test('04 Upload valid image', async ({ practiceFormService, resultModalAssertions }) => {
    const result = await practiceFormService.fillAndSubmitForm({
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Other',
      mobileNumber: '1234567890',
      picturePath: 'resources/photo.png',
    });

    await resultModalAssertions.shouldShowResultModal(
      result,
      'Result modal should appear after uploading a valid image',
    );
    await resultModalAssertions.shouldShowAppropriateCellText(
      studentData.mandatoryDataWithPicture,
      'Uploaded image is not displayed correctly in result table',
    );
  });

  test('05 Select state and without city', async ({
    practiceFormService,
    resultModalAssertions,
  }) => {
    const result = await practiceFormService.fillAndSubmitForm({
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Female',
      mobileNumber: '1234567890',
      state: 'Rajasthan',
    });

    await resultModalAssertions.shouldShowResultModal(
      result,
      'Result modal should appear after selecting state without city',
    );
    await resultModalAssertions.shouldShowAppropriateCellText(
      studentData.mandatoryDataWithState,
      'Result table contains incorrect state data when city is not selected',
    );
  });

  test('06 Select state and city', async ({ practiceFormService, resultModalAssertions }) => {
    const result = await practiceFormService.fillAndSubmitForm({
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Male',
      mobileNumber: '1234567890',
      state: 'Rajasthan',
      city: 'Jaiselmer',
    });

    await resultModalAssertions.shouldShowResultModal(
      result,
      'Result modal should appear after selecting both state and city',
    );
    await resultModalAssertions.shouldShowAppropriateCellText(
      studentData.mandatoryDataWithStateAndCity,
      'Result table contains incorrect state or city data',
    );
  });

  test('07 Successful submit with all valid data', async ({
    practiceFormService,
    resultModalAssertions,
  }) => {
    const result = await practiceFormService.fillAndSubmitForm({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      gender: 'Male',
      mobileNumber: '9876543210',
      dateOfBirth: '14 Apr 1995',
      subjects: ['Maths', 'Computer Science'],
      hobbies: ['Sports', 'Reading'],
      picturePath: 'resources/photo.png',
      address: '221B Baker Street, London',
      state: 'NCR',
      city: 'Noida',
    });

    await resultModalAssertions.shouldShowResultModal(
      result,
      'Result modal should appear after submitting form with all valid data',
    );
    await resultModalAssertions.shouldShowAppropriateCellText(
      studentData.allValidData,
      'Result table does not match the submitted valid student data',
    );
  });
});

// test.describe('Negative: missing required fields', () => {
//   for (const testCase of missingRequiredFieldCases) {
//     test(`Submit form with ${testCase.title}`, async ({
//       practiceFormService,
//       practiceFormAssertions,
//       resultModalAssertions,
//     }) => {
//       const result = await practiceFormService.fillAndSubmitForm(testCase.formData);

//       if (testCase.expectedBehavior === 'accept_with_mobile_normalization') {
//         await resultModalAssertions.shouldShowResultModal(
//           result,
//           `Result modal should appear when ${testCase.title} because DemoQA normalizes mobile input`,
//         );
//         await resultModalAssertions.shouldShowAppropriateCellText(
//           [
//             {
//               label: 'Mobile',
//               value: testCase.expectedMobileNumberInResult ?? '',
//             },
//           ],
//           `Result table should contain normalized mobile number when ${testCase.title}`,
//         );
//         return;
//       }

//       await practiceFormAssertions.shouldRejectSubmissionAndMarkRequiredFieldInvalid(
//         result,
//         testCase.missingField,
//         `Form should be rejected and mark "${testCase.missingField}" invalid when ${testCase.title}`,
//       );

//       // Keep existing modal-only assertion pattern as a secondary check.
//       await resultModalAssertions.shouldNotShowResultModal(
//         result,
//         `Result modal should not appear when ${testCase.title}`,
//       );
//     });
//   }

  // test('TC-N-03 Empty Last Name', async ({ page }) => {
  //   const form = new PracticeFormPage(page);
  //   await form.open();
  //   await form.setFirstName('John');
  //   await form.selectGender('Male');
  //   await form.setMobile('1234567890');
  //   await form.submit();
  //   await expect(page.locator('.modal-content')).not.toBeVisible();
  // });

  // test('TC-N-04 Gender not selected', async ({ page }) => {
  //   const form = new PracticeFormPage(page);
  //   await form.open();
  //   await form.setFirstName('John');
  //   await form.setLastName('Doe');
  //   await form.setMobile('1234567890');
  //   await form.submit();
  //   await expect(page.locator('.modal-content')).not.toBeVisible();
  // });

  // test('TC-N-05 Mobile empty', async ({ page }) => {
  //   const form = new PracticeFormPage(page);
  //   await form.open();
  //   await form.setFirstName('John');
  //   await form.setLastName('Doe');
  //   await form.selectGender('Male');
  //   await form.submit();
  //   await expect(page.locator('.modal-content')).not.toBeVisible();
  // });

  // test('TC-N-06 Mobile < 10 digits', async ({ page }) => {
  //   const form = new PracticeFormPage(page);
  //   await form.open();
  //   await form.setFirstName('John');
  //   await form.setLastName('Doe');
  //   await form.selectGender('Male');
  //   await form.setMobile('12345');
  //   await form.submit();
  //   await expect(page.locator('.modal-content')).not.toBeVisible();
  // });

  // test('TC-N-07 Mobile > 10 digits', async ({ page }) => {
  //   const form = new PracticeFormPage(page);
  //   await form.open();
  //   await form.setFirstName('John');
  //   await form.setLastName('Doe');
  //   await form.selectGender('Male');
  //   await form.setMobile('123456789012');
  //   await form.submit();
  //   await expect(page.locator('.modal-content')).not.toBeVisible();
  // });

  // test('TC-N-08 Mobile with letters', async ({ page }) => {
  //   const form = new PracticeFormPage(page);
  //   await form.open();
  //   await form.setFirstName('John');
  //   await form.setLastName('Doe');
  //   await form.selectGender('Male');
  //   await form.setMobile('29abc45678');
  //   await form.submit();
  //   await expect(page.locator('.modal-content')).not.toBeVisible();
  // });

  // test('TC-N-09 Invalid email', async ({ page }) => {
  //   const form = new PracticeFormPage(page);
  //   await form.open();
  //   await form.setFirstName('John');
  //   await form.setLastName('Doe');
  //   await form.setEmail('test@');
  //   await form.selectGender('Male');
  //   await form.setMobile('1234567890');
  //   await form.submit();
  //   await expect(page.locator('.modal-content')).not.toBeVisible();
  // });

  // test('TC-N-10 Invalid file format', async ({ page }) => {
  //   const form = new PracticeFormPage(page);
  //   await form.open();
  //   await form.setFirstName('John');
  //   await form.setLastName('Doe');
  //   await form.selectGender('Male');
  //   await form.setMobile('1234567890');
  //   await form.uploadPicture('resources/file.pdf');
  //   await form.submit();
  //   await expect(page.locator('.modal-content')).not.toBeVisible();
  // });

  // test('TC-N-11 State or City not selected', async ({ paри
  //   await form.submit();
  //   await expect(page.locator('.modal-content')).not.toBeVisible();
  // });

  // test('TC-N-12 Special characters in name', async ({ page }) => {
  //   const form = new PracticeFormPage(page);
  //   await form.open();
  //   await form.setFirstName('@@@###');
  //   await form.setLastName('@@@###');
  //   await form.selectGender('Male');
  //   await form.setMobile('1234567890');
  //   await form.submit();
  //   await expect(page.locator('.modal-content')).not.toBeVisible();
  // });
});
