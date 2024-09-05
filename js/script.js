const userInputs = document.querySelectorAll("input");

const clearUserInput = (inputs) => {
    inputs.forEach((input) => {
        inputs.
    });
}

/* User Sign In Form Open and Closing Form */

const signInButton = document.querySelector("#sign-in");
const signInModal = document.querySelector(".dialog-signin");
const closeSignIn = document.querySelector(".close-signin");
const userInput = document.querySelector('input');

const openUserSignIn = () => {
    signInModal.showModal();
}

signInButton.addEventListener("click", openUserSignIn);

const closeUserSignIn = () => {
    signInModal.close();
}

closeSignIn.addEventListener("click", closeUserSignIn);

/* Add Book Form for Open and close function */

const addBookButton = document.querySelector("#add-book");
const addBookForm = document.querySelector(".dialog-bookform");
const closeBookForm = document.querySelector(".close-form");

addBookButton.addEventListener("click", () => {
    addBookForm.showModal();
});

closeBookForm.addEventListener("click", () => {
    addBookForm.close();
})

