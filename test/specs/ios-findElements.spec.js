describe('iOS Find Elements', () => {
  it('Find element by accessibility ID', async () => {
    await $('~Alert Views').click();
    await $('~Simple').click();
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });

  it('Find element by tag name', async () => {
    // single element
    console.log(await $('XCUIElementTypeStaticText').getText());

    // multiple elements
    const textElements = await $$('XCUIElementTypeStaticText');

    for (const element of textElements) {
      console.log(await element.getText());
    }
  });

  it('Find element by XPath', async () => {
    // xpath - (//tagname[@attribute="value"])
    await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
    await $('//XCUIElementTypeStaticText[@label="Simple"]').click();
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });

  it('Find element by class chain', async () => {
    await $(`-ios class chain:${'**/XCUIElementTypeStaticText[`label=="Alert Views"`]'}`).click();
    // await $(`-ios class chain:${'**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]'}`).click();

    await $('//XCUIElementTypeStaticText[@label="Simple"]').click();
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });

  it('Find element by predicate string', async () => {
    await $(`-ios predicate string:${'label == "Alert Views"'}`).click();
    // await $(`-ios predicate string:${'value BEGINSWITH[c] "alert"'}`).click();

    await $('//XCUIElementTypeStaticText[@label="Simple"]').click();
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });

  it.only('Enter text in the search field', async () => {
    await $('~Search').click();
    await $('~Default').click();

    await $('//XCUIElementTypeSearchField').addValue("I Love This Course");
    await expect($('//XCUIElementTypeSearchField')).toHaveAttr("value");

    await $('~Clear text').click();
    await expect($('//XCUIElementTypeSearchField')).not.toHaveAttr("value");
  });
});