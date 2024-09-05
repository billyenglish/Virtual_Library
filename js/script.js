/* User Sign In Form Open and Closing Form */

const signInButton = document.querySelector("#sign-in");
const signInModal = document.querySelector(".dialog-signin");
const closeSignIn = document.querySelector(".close-signin");

const openUserSignIn = () => signInModal.showModal();

signInButton.addEventListener("click", openUserSignIn);

const closeUserSignIn = () => {
    signInModal.close();
}

closeSignIn.addEventListener("click", closeUserSignIn);

