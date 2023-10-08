describe("Book Operations", () => {
  // test add book
  describe("add book function", () => {
    it("checks if new book was added", () => {
      assert.deepEqual(
        {
          title: "The history of a difficult child",
          author: "Mihret Sibhat",
          libraryID: 1234,
        },
        addBook("The history of a difficult child", "Mihret Sibhat", 1234)
      );
      libraryBooks.pop();
    });
  });

  //test get title
  describe("getTitles function", () => {
    it("check the getTitles function", () => {
      assert.deepEqual(
        [
          "Mockingjay: The Final Book of The Hunger Games",
          "The Road Ahead",
          "The Road Ahead",
          "Walter Isaacson",
        ],
        getTitles()
      );
    });
  });

  //test find books
  describe("findBooks function", () => {
    it("checks the findBooks function", () => {
      assert.deepEqual(
        ["Mockingjay: The Final Book of The Hunger Games"],
        findBooks("Hunger Games")
      );
    });
  });
});
