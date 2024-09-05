const userInputs = document.querySelectorAll("input");

const clearForm = (inputs) => {
    inputs.forEach(input => input.type === "checked" ? checked = false : input.value = "");
}

/* User Sign In Form Open and Closing Form */

const signInButton = document.querySelector("#sign-in");
const signInModal = document.querySelector(".dialog-signin");
const closeSignIn = document.querySelector(".close-signin");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const cancelSignIn = document.querySelector("#cancel-signin");

const openUserSignIn = () => {
    signInModal.showModal();
}

signInButton.addEventListener("click", openUserSignIn);

const closeUserSignIn = () => {
    signInModal.close();
    clearForm([username, password]);
}

closeSignIn.addEventListener("click", closeUserSignIn);

cancelSignIn.addEventListener("click", () => {
    signInModal.close();
    clearForm([username, password]);
});

const addBookButton = document.querySelector("#add-book");
const addBookForm = document.querySelector(".dialog-bookform");
const closeBookForm = document.querySelector(".close-form");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author")
const bookPages = document.querySelector("pages");
const isRead = document.querySelector("#read");

/* Add Book Form for Open and close function */

addBookButton.addEventListener("click", () => {
    addBookForm.showModal();
});

closeBookForm.addEventListener("click", () => {
    addBookForm.close();
    clearForm([bookTitle, bookAuthor, bookPages, read]);
})

