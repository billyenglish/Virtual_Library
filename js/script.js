class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    bookTitle() {
        return this.title === "" ? "Please Enter A Book Title" : this.title;
    }

    bookAuthor() {
        return this.author === "" ? "Please Enter A Book Author" : this.author;
    }

    bookPages() {
        return this.pages > 0 ? "Please Valid Number of Book Pages" : this.pages;
    }

    isRead() {
        return this.read;
    }
}

const myLibrary = [];

function addToLibrary(bookTitle, bookAuthor, bookPages, bookIsRead) {
    let createBook = new Book(bookTitle, bookAuthor, bookPages, bookIsRead);
    myLibrary.push(createBook);
    return myLibrary;
}

function createBook() {
    let result = addToLibrary('Title', 'Author', 'Pages', 'isRead');

    result.forEach(book => {
        console.log(book.bookTitle());
        console.log(book.bookAuthor());
        console.log(book.bookPages());
        console.log(book.isRead());
    })
;}

console.log(createBook());