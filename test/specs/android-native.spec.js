describe('Android Native feature Tests', () => {
  it('Access an Activity Directly', async () => {
    // access Activity
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

    // pause 3s
    // await driver.pause(3000);

    // assertion
    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
  });

  it('Working with Dialog Boxes', async () => {
    // access Activity
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

    // accept Alert
    await driver.acceptAlert();

    // dissmiss Alert
    await driver.dissmissAlert();

    // get Alert Text
    console.log('ALERT TEXT -->', await driver.getAlertText());

    // click on OK Button
    await $('//*[resource-id="android:id/alertTitle"]').click();

    // assertion - Alert Box is no Longer Visible
    await expect($('//*[resource-id="android:id/alertTitle"]')).not.toExist();
  });

  it('Vertical Scrolling', async () => {
    await $('~App').click();
    await $('~Activity').click();

    // scrollTextIntoView
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

    // assertion
    await expect($('~Secure Dialog')).toExist();
  });

  it('Horizontal Scrolling', async () => {
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.view.Gallery1");

    // Horizontal Scrolling
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
  });

  it.only('Working with Date Picker', async () => {
    // access the date picker
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1");

    //get current date
    const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
    const currentDate = await date.getText();

    // click on change button
    await $('~change the date').click();

    // scroll right to the next month
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

    // select the 10th date
    await $('//*[@text="10"]').click();

    // click on Ok button
    await $('//*[@resource-id="android:id/button1"]').click();

    // verify the updated date
    await expect(await date.getText()).not.toEqual(currentDate);
  });
});