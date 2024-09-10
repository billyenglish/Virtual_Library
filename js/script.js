const dialog = document.querySelector("#dialog");
const openForm = document.querySelector("#form");
const addBook = document.querySelector("#add-book");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookRead = document.querySelector("#read");
const bookShelf = document.querySelector("#bookshelf");
const closeIcon = document.querySelector(".close-form")
const cancelButton = document.querySelector("#cancel");

const openBookForm = () => {
    dialog.showModal();
}

addBook.addEventListener("click", openBookForm);

const clearBookForm = () => {
    dialog.close();
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    bookRead.checked = false;
}

closeIcon.addEventListener("click", clearBookForm);
cancelButton.addEventListener("click", clearBookForm);

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    isTitle() {
    }

    isAuthor() {
    }

    isPages() {
    }

    isRead() {
    }
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    return myLibrary;
}

function invalidEntry() {
}

function createBook() {
    let newBook = addBookToLibrary(title, author, pages, read);

    newBook.forEach(book => {
        console.log(book);
    })
}

const submitButton = document.querySelector('#submit');

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(`${bookTitle.value}`, `${bookAuthor.value}`, `${bookPages.value}`, `${bookRead.checked}`);
    createBook();
});

