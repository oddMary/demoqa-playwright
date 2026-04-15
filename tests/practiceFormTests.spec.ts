import { expect, test } from './fixtures/PracticeFormPageFixture';

test.describe('', () => {
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

    await resultModalAssertions.shouldShowResultModal(result, 'ttt');
    //await resultModalAssertions.ShoulShowAppropriateData(result, 'ttt');
  });

  test('02 Select Male gender', async ({ practiceFormService, resultModalAssertions }) => {
    const result = await practiceFormService.fillAndSubmitForm({
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Male',
      mobileNumber: '1234567890',
    });

    await resultModalAssertions.shouldShowResultModal(result, 'ttt');
    //await resultModalAssertions.ShoulShowAppropriateData(result, 'ttt');
  });

  test('03 Select Female gender', async ({ practiceFormService, resultModalAssertions }) => {
    const result = await practiceFormService.fillAndSubmitForm({
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Female',
      mobileNumber: '1234567890',
    });

    await resultModalAssertions.shouldShowResultModal(result, 'ttt');
    //await resultModalAssertions.ShoulShowAppropriateData(result, 'ttt');
  });

  test('04 Select Other gender', async ({ practiceFormService, resultModalAssertions }) => {
    const result = await practiceFormService.fillAndSubmitForm({
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Other',
      mobileNumber: '1234567890',
    });

    await resultModalAssertions.shouldShowResultModal(result, 'ttt');
    //await resultModalAssertions.ShoulShowAppropriateData(result, 'ttt');
  });

  test('05 Multiple subjects', async ({ practiceFormService, resultModalAssertions }) => {
    const result = await practiceFormService.fillAndSubmitForm({
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Other',
      mobileNumber: '1234567890',
      subjects: ['Maths', 'Physics'],
    });

    await resultModalAssertions.shouldShowResultModal(result, 'ttt');
    //await resultModalAssertions.ShoulShowAppropriateData(result, 'ttt');
    //expect(await modal.getValue('Subjects')).toContain('Maths');
    //expect(await modal.getValue('Hobbies')).toContain('Physics');
  });

  test('06 Multiple hobbies', async ({ practiceFormService, resultModalAssertions }) => {
    const result = await practiceFormService.fillAndSubmitForm({
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Other',
      mobileNumber: '1234567890',
      hobbies: ['Reading', 'Music'],
    });

    await resultModalAssertions.shouldShowResultModal(result, 'ttt');
    //await resultModalAssertions.ShoulShowAppropriateData(result, 'ttt');
    //expect(await modal.getValue('Hobbies')).toContain('Reading');
    //expect(await modal.getValue('Hobbies')).toContain('Music');
  });

  test('07 Upload valid image', async ({ practiceFormService, resultModalAssertions }) => {
    const result = await practiceFormService.fillAndSubmitForm({
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Other',
      mobileNumber: '1234567890',
      picturePath: 'resources/photo.png',
    });

    await resultModalAssertions.shouldShowResultModal(result, 'ttt');
    //await resultModalAssertions.ShoulShowAppropriateData(result, 'ttt');
    //expect(await modal.getValue('Hobbies')).toContain('Reading');
  });

  test('08 Select state and check city combobox enabled', async ({
    practiceFormService,
    resultModalAssertions,
  }) => {
    //await practiceFormAssertions.ShoulCityBeDisabled(result, 'ttt');
    const result = await practiceFormService.fillForm({ state: 'Haryana' });

    //await practiceFormAssertions.ShoulCityBeDisabled(result, 'ttt');
  });

  test('09 Select state and city', async ({ practiceFormService, resultModalAssertions }) => {
    const result = await practiceFormService.fillAndSubmitForm({
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Other',
      mobileNumber: '1234567890',
      state: 'Rajasthan',
      city: 'Jaipur',
    });

    await resultModalAssertions.shouldShowResultModal(result, 'ttt');
    //await resultModalAssertions.ShoulShowAppropriateData(result, 'ttt');
    //expect(await modal.getValue('Hobbies')).toContain('Reading');
  });

  test('10 Successful submit with valid data', async ({
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
      city: 'Delhi',
    });

    await resultModalAssertions.shouldShowResultModal(result, 'ttt');
    //await resultModalAssertions.ShoulShowAppropriateData(result, 'ttt');
  });
});
