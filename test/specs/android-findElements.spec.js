describe('Android Elements Tests', () => {
  it('Find element by accessibility ID', async () => {
    // find element by accessibility id
    const appOption = await $('~App');

    // click on element
    await appOption.click();

    // assertion
    const actionBar = await $('~Action Bar');
    await expect(actionBar).toBeExisting();

  });

  it('Find element by class name', async () => {
    // find element by class name
    const className = await $('android.widget.TextView');

    console.log(await className.getText());

    // Assertion
    await expect(className).toHaveText("API Demos");

  });

  it('Find element by XPath', async () => {
    // XPath - ('//tagname[@attribute="value"]')
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

    // find by resourceID
    await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

    // find by text
    await $('//android.widget.TextView[@text="Command two"]').click();

    // find by class - Assertion
    const textAssertion = await $('//android.widget.TextView');
    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
  });

  it('Find element by UIAutomator', async () => {
    // find by text contains
    await $('android=new UiSelector().textContains("Alert")').click();
  });

  it('Find multiple elements', async () => {
    const expectedList = [
      'API Demos', "Access'ibility",
      'Accessibility', 'Animation',
      'App', 'Content',
      'Graphics', 'Media',
      'NFC', 'OS',
      'Preference', 'Text',
      'Views'
    ]
    const actualList = []

    // find multiple elements
    const textList = await $$('android.widget.TextView');

    // loop through them
    for (const element of textList) {
      actualList.push(await element.getText());
    }

    // assert the list
    await expect(actualList).toEqual(expectedList);
  });

  it('Exercise: Enter text in the search field', async () => {
    // Access Auto Complete screen
    await $('//android.widget.TextView[@content-desc="Views"]').click();
    await $('//android.widget.TextView[@content-desc="Auto Complete"]').click();
    await $('~1. Screen Top').click();

    // enter country name
    const inputField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
    await inputField.addValue('Indonesia');

    // verify Country Name
    await expect(inputField).toHaveText('Indonesia');

  });
});