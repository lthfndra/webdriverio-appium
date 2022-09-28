describe('Todo Item', () => {
  it('Create a todo item', async () => {
    // Create todo list
    await $('//*[@name="Create list"]').click();
    await $('//*[@value="List Name"]').addValue("Things to do today");
    await $('~Create').click();
    await expect(await $('~Things to do today')).toBeExisting();

    // Create todo item
    await $('~Things to do today').click();
    await $('//*[@name="Create item"]').click();
    await $('//*[@value="Title"]').addValue("Buy groceries");
    await $('//*[@value="Due"]').click();
    await $('~Date Picker').click();
    await $('~Friday, September 30').click();
    await $('//*XCUIElementTypeWindow[@index=2]').click();
    await $('~Create').click();

    // assertion
    await expect(await $('~Buy groceries')).toBeExisting();
    await expect(await $('~Due Due September 30, 2022')).toBeExisting();



  });
});