// Create Virtual Library
// Create a Book
// This should have the following properties: title (string), author (string), genre (string), pages (number), read (boolean)
// This book should also have a unique ID (string) that is generated when the book is created.
// Before creating the book check if the book already exists in the library.
// Validate the book properties


const myLibrary = [];

function Book(isTitle, isAuthor, isGenre, isPages, isRead) {
    this.isTitle = isTitle;
    this.isAuthor = isAuthor;
    this.isGenre = isGenre;
    this.isPages = isPages;
    this.isRead = isRead;
    this.id = crypto.randomUUID();
}

