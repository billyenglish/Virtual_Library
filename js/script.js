/* Created Opening Sign In */

const signIn = document.querySelector(".sign-in");
const signinForm = document.querySelector(".dialog-signin");

signIn.addEventListener("click", openSignIn);

function openSignIn() {
    signinForm.showModal();
}

/* Created Closing Sign In */

const closeSignIn = document.querySelector(".close-signin");

closeSignIn.addEventListener("click", closeSignInForm);

function closeSignInForm() {
    signinForm.close();
}

/* Clear User Sign In Form */

const clearSignIn = document.querySelector("#cancel-signin");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

clearSignIn.addEventListener("click", clearSignInForm);

function clearSignInForm() {
    usernameInput.value = "";
    passwordInput.value = "";
    signinForm.close();

    return;
}

/* Opening Book Form */

const addBook = document.querySelector("#add-book");
const openBookForm = document.querySelector(".dialog-bookform");

addBook.addEventListener("click", toggleBookForm);

function toggleBookForm() {
    openBookForm.showModal();
}

/* Close Book Form */

const closeForm = document.querySelector(".close-form");
const bookForm = document.querySelector(".dialog-bookform");

closeForm.addEventListener("click", closeBookForm);

function closeBookForm() {
    bookForm.close();
}

/* Clear Book Form */

const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookIsRead = document.querySelector("#read");
const cancelBookForm = document.querySelector("#cancel-bookform");

cancelBookForm.addEventListener("click", cancelBookFormToggle);

function cancelBookFormToggle() {
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    bookIsRead.checked = false;
    bookForm.close();
}

/* Creating Library */

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addToLibrary() {

}