/* Initialized Create Add Book Button and Book Form Variable */

const createBook = document.querySelector("#create-book");
const dialogBook = document.querySelector("#dialog");

/* Show Book Form Opens Book Forms */

const showBookForm = () => {
    dialogBook.showModal();
}

createBook.addEventListener("click", showBookForm);

/* Initialized the Close Icon and inputs */

const closeIcon = document.querySelector(".close-bookform");
const inputs = document.querySelectorAll("input");

/* Close Book Form Function */

const closeBookForm = () => {
    dialogBook.close();
    clearForm(inputs);
}

/* Close Icon Clear Inputs and Closes Forms */

closeIcon.addEventListener("click", closeBookForm);

/* Initialized the Cancel Button Variable */

const cancelButton = document.querySelector("#cancel");

/* Clear Form Functions */

const clearForm = (inputs) => {
    inputs.forEach(input => {
        if (input.id === "title") {
            input.value = "";
        }

        if (input.id === "author") {
            input.value = "";
        }

        if (input.id === "pages") {
            input.value = "";
        }

        if (input.id === "read") {
            input.checked = "";
        }
    });
}

/* Cancel Button that closes the Book Form and Clears */

cancelButton.addEventListener("click", () => clearForm(inputs));

/* Creating Book Class */

const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookisRead = document.querySelector("#read");
const bookShelf = document.querySelector("#bookshelf");

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const myLibrary = [];

const addBookToLibrary = () => {
    let book = new Book('The Hobbit', 'J.K Rawlings', 454, true);
    myLibrary.push(book);
    return myLibrary;
}

const newBook = function () {
    
}





