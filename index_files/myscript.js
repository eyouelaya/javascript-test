let libraryBooks = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3257,
  },
];

function addBook(title, author, libraryID) {
  let book = {
    title: title,
    author: author,
    libraryID: libraryID,
  };
  libraryBooks.push(book);
  return book;
}

function getTitles() {
  return libraryBooks.map((b) => b.title).sort();
}

function findBooks(title) {
  return libraryBooks.map((b) => b.title).filter((t) => t.includes(title));
}
