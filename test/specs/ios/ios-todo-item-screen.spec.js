import ListScreen from "../../screenobjects/ios/list.screen";
import ItemScreen from "../../screenobjects/ios/item.screen";

describe("Todo Item", () => {
  before(async () => {
    // Create todo list
    await ListScreen.createListBtn.click();
    await ListScreen.listNameInput.addValue("Things to do today");
    await ListScreen.createBtn.click();
    await expect(await ListScreen.listNameField("Things to do today")).toBeExisting();
    await ListScreen.listNameField("Things to do today").click();
  });

  it("Create a todo item", async () => {
    // Create todo item
    await ItemScreen.createItem.click();
    await ItemScreen.title.addValue("Buy groceries");
    await ItemScreen.dueDate.click();
    await ItemScreen.datePicker.click();
    await ItemScreen.getByAccessibility("Friday, September 30").click();
    await ItemScreen.secondWindow.click();
    await ItemScreen.createBtn.click();

    // assertion
    await ItemScreen.getByAccessibility("Buy groceries").click();
    await ItemScreen.getByAccessibility("Due September 30, 2022").click();
  });
});
