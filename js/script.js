const createBook = document.querySelector("#create-book");
const dialogBook = document.querySelector("#dialog");

const showBookForm = () => {
    dialogBook.showModal();
}

createBook.addEventListener("click", showBookForm);

const closeIcon = document.querySelector(".close-bookform");

const closeBookForm = () => {
    dialogBook.close();
}

closeIcon.addEventListener("click", closeBookForm);