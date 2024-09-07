const createBook = document.querySelector("#create-book");
const dialogBook = document.querySelector("#dialog");

const showBookForm = () => {
    dialogBook.showModal();
}

createBook.addEventListener("click", showBookForm);

const closeIcon = document.querySelector(".close-bookform");
const inputs = document.querySelectorAll("input");

const closeBookForm = () => {
    dialogBook.close();
    clearForm(inputs);
}

closeIcon.addEventListener("click", closeBookForm);

const cancelButton = document.querySelector("#cancel");

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

cancelButton.addEventListener("click", () => clearForm(inputs));