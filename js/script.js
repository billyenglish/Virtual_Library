const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addToLibrary() {
    let createBook = new Book('Book', 'Author', 230, 'Yes');

    const addBook = {
        addTitle: createBook.title,
        addAuthor: createBook.author,
        addPages: createBook.pages,
        addRead: true
    }

    myLibrary.push(addBook);

    return myLibrary;
}

let result = addToLibrary();
console.log(result);