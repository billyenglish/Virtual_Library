const openFormModal = () => {
    const addNewBook = document.querySelector('#add-new-book');
    const dialogModal = document.querySelector("dialog");

    addNewBook.addEventListener('click', () => {
        if (dialogModal.close) {
            dialogModal.showModal();
        }
    });
}

openFormModal();

const closeFormModal = () => {
    const closeButton = document.querySelector('.close-menu');
    const dialogModal = document.querySelector("dialog");

    closeButton.addEventListener('click', () => {
        if (dialogModal.open) {
            dialogModal.close();
        }
    });
}

closeFormModal();