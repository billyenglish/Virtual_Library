const signIn = document.querySelector(".sign-in");
const userSignIn = document.querySelector(".dialog-signin");
const closeSignIn = document.querySelector(".close-signin");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const addBook = document.querySelector("#add-book");
const dialogBookForm = document.querySelector(".dialog-bookform");
const closeBookForm = document.querySelector(".close-form");
const cancelSignIn = document.querySelector("#cancel-signin");
const cancelBookForm = document.querySelector("#cancel-bookform");
const bookTitle = document.querySelector("#title")
const bookAuthor = document.querySelector("#author");
const numberOfPages = document.querySelector("#pages");
const readBook = document.querySelector("#read");
const submitBook = document.querySelector("#submit-bookform");
const bookshelf = document.querySelector("#bookshelf");

/* User Sign In Button Opens User Sign In Form */

signIn.addEventListener("click", signInForm);

function signInForm() {
    userSignIn.showModal();
}

/* Close User Sign In Form */

closeSignIn.addEventListener("click", closeUserSignInForm); 

function closeUserSignInForm() {
    userSignIn.close();
    clearUserSignInForm();
}

/* Cancel User Sign In */

function clearUserSignInForm() {

    username.value = "";
    password.value = "";

    return;
}

cancelSignIn.addEventListener("click", clearUserSignInForm);

/* Open Virtual Book Form */

function openBookForm() {
    dialogBookForm.showModal();
}

addBook.addEventListener("click", openBookForm);

/* Close Virtual Book Form */

function closeBook() {
    dialogBookForm.close();
}

closeBookForm.addEventListener("click", closeBook);

/* Clear Virtual Book Form */

function clearBookForm() {
    bookTitle.value = "";
    bookAuthor.value = "";
    numberOfPages.value = "";
    readBook.checked = "";

    return;
}

/* Cancel Book Form */

cancelBookForm.addEventListener("click", clearBookForm);

/* Create Virtual Book */

const myLibrary = [];

function Book(title, author, book, read) {
    this.title = title;
    this.author = author;
    this.book = book;
    this.read = read;
}

function addBookToLibrary() {
    let createTitle = bookTitle.value;
    let createAuthor = bookAuthor.value;
    let createBookPages = numberOfPages.value;
    let createReadBook = readBook.value;

    const createBook = new Book(createTitle, createAuthor, createBookPages, createReadBook);

    myLibrary.push(createBook);

    console.log(myLibrary);
}

console.log(addBookToLibrary())

submitBook.addEventListener("click", addBookToLibrary);