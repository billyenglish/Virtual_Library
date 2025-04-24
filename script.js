// Create Virtual Library
// Create a Book
// This should have the following properties: title (string), author (string), genre (string), pages (number), read (boolean)
// This book should also have a unique ID (string) that is generated when the book is created.
// Before creating the book check if the book already exists in the library.
// Validate the book properties


const myLibrary = [];

function Book(title, author, genre, pages, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, genre, pages, read) {

    const newBook = new Book(title, author, genre, pages, read);

    if (newBook.title !== "" && author !== "" && genre !== "" && pages > 0) {
        myLibrary.push(newBook);
        console.log(myLibrary);
    } else {
        console.log("Invalid");
        myLibrary.push(newBook)
        console.log(myLibrary);
    }

}

function createBook(bookInfo) {

    for (let i = 0; i < bookInfo.length; i++) {
        console.log(bookInfo[0].isTitle);
        console.log(bookInfo[0].isAuthor);
        console.log(bookInfo[0].isGenre);
        console.log(bookInfo[0].isPages);
        console.log(bookInfo[0].isRead);
    }
}

Book.prototype.isRead = function () {
    this.isRead = !this.isRead;
    console.log(this.isRead);
}

let book = new Book('The Hobbit', 'J.K Rawlings', 'Sci-Fi', 98, true);
console.log(book);
console.log(book.isRead());
