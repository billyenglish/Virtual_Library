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
    
    if (newBook.title !== "" && newBook.author !== "" && newBook.genre !== "" && newBook.pages !== "") {
        myLibrary.push(newBook);
        duplicateBook(myLibrary);
    } else {
        myLibrary.push(newBook);
        return myLibrary;
    }

}

function duplicateBook(checkBook) {
    console.log(checkBook);
}

let book = addBookToLibrary('The Hobbit', 'J.K. Rawlings', 'Horror', 300, true);

