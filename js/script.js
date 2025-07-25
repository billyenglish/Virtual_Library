class MyLibrary {
    constructor() {
        this.library = [];
    }

    currentLibrary(book) {
        this.library.push(book);
        console.log(this.library);
    }
}

class Book {
    constructor(title, author, pages, genre, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
        this.read = read;
        this.id = crypto.randomUUID();
    }

    getBookTitle() {
        console.log(title);
    }
}

class FormButtons {
    constructor() {
        this.create = document.querySelector('#form-create');
        this.clear = document.querySelector('#form-cancel');
    }

    createButton() {
        this.create.addEventListener('click', () => {
            alert('Create');
        })
    }

    clearButton() {
        this.clear.addEventListener('click', () => {
            alert('Clear');
        });
    }

}

class DialogModal {
    constructor() {
        this.openModal = document.querySelector('#add-book');
        this.closeModal = document.querySelector('.fa-xmark');
    }

    openModal() {
        this.openModal.addEventListener('click', () => {

        });
    }

    closeModal() {
        this.closeModal.addEventListener('click', () => {

        });
    }
}


let dialog = new DialogModal();
dialog
