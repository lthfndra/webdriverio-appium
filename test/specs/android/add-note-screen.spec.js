const AddNoteScreen = require("../../screenobjects/android/add-note.screen");

describe('Add Notes', () => {
  it('Skip Tutorial', async () => {
    await AddNoteScreen.skipBtn.click();

    await expect(AddNoteScreen.addNoteText).toBeDisplayed();
  });

  it('add a note, save change & verify note', async () => {
    await AddNoteScreen.addNoteText.click();
    await AddNoteScreen.textOption.click();
    await expect(AddNoteScreen.textEditing).toBeDisplayed();

    // add note tittle
    await AddNoteScreen.noteHeading.addValue("Fav Anime List");

    // add note body
    await AddNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT");

    // save the changes
    await AddNoteScreen.saveNote();

    // assertion
    await expect(AddNoteScreen.editBtn).toBeDisplayed();
    await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");
  });
});