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
}

function addBookToLibrary(title = '', author = '', genre = '', pages = '', read = false) {

    const newBook = {
        title,
        author,
        genre,
        pages,
        read,
        id: crypto.randomUUID()
    }

    if (newBook.title !== "" && newBook.author !== "" && newBook !== "" && newBook.pages !== "") {
        myLibrary.push(newBook);
        return myLibrary;
    } else {
        myLibrary.push(newBook);
        validateBook(myLibrary);
    }

}

function validateBook(validBook) {
    console.log("Hello World");
    console.log(validBook);
}

let book = new Book('', 'J.K. Rawlings', 'Fantasy', 298, true);
let bookDetails = addBookToLibrary(book.title, book.author, book.genre, book.pages, book.read);
