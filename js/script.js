const dialog = document.querySelector("#dialog");
const openForm = document.querySelector("#form");
const addBook = document.querySelector("#add-book");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookRead = document.querySelector("#read");
const closeIcon = document.querySelector(".close-form")
const bookShelf = document.querySelector("#bookshelf");
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
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

const myLibrary = [];

function addBookToLibrary() {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
    myLibrary.push(newBook);
    return myLibrary;
}

function createBook() {
    let getBook = addBookToLibrary();

    getBook.forEach((book) => {
        const createBook = document.createElement("div");
        createBook.classList.add("virtual-book");
        createBook.innerHTML = `
            <h2 class="book-title">${book.title}</h2>
            <h3 class="book-author">By: ${book.author}</h3>
            <p class="book-pages">Pages: ${book.pages}</p>
            <div class="book-controls">
                <button class="delete" type="button">Delete</button>
                <button class="read" type="button">${book.isRead ? "Read" : "Not Read"}</button>
            </div>
        `;
        bookShelf.appendChild(createBook);
    });
}

const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    createBook();
    clearBookForm();
});




