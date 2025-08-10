class Book {
    constructor(title, author, pages, genre, image) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
        this.image = image || '';
        this.read = false;
        this.id = crypto.randomUUID();
    }
}

class Library {
    constructor() {
        this.myLibrary = [];
    }

    validateBook(book) {
        const bookErrors = [];
    
        if (!book.title || book.title.trim() == '') {
            bookErrors.push('Please enter book title!');
        }

        if (!book.author || book.author.trim() == '') {
            bookErrors.push('Please enter book author!');
        }

        if (!book.pages || book.pages <= 0) {
            bookErrors.push('Please enter book pages!');
        }

        if (!book.genre || book.genre == '') {
            bookErrors.push('Please enter book genre!');
        }

        if (bookErrors.length > 0) {
            return { success: false, bookErrors }
        } else {
            this.myLibrary.push(book);
            return { success: true, library: this.myLibrary }
        }
    }
}

let book = new Book('', '', '' , '');
let library = new Library();
console.log(library.validateBook(book));

class DialogModal {
    constructor() {
        this.closeFormButton = document.querySelector('#close_form_button');
        this.addBookButton = document.querySelector('#add_book_btn');
        this.dialogModal = document.querySelector('dialog');

        this.handleCloseFormButton = this.handleCloseFormButton.bind(this);
        this.handleAddBookButton = this.handleAddBookButton.bind(this);
        this.handleEventListener();
    }

    handleAddBookButton(e) {
        e.preventDefault();
        this.dialogModal.showModal();
    }

    handleCloseFormButton(e) {
        e.preventDefault();
        this.dialogModal.close();
    }

    handleEventListener() {
        this.addBookButton.addEventListener('click', this.handleAddBookButton);
        this.closeFormButton.addEventListener('click', this.handleCloseFormButton);
    }

}

const dialogModal = new DialogModal();
dialogModal.handleEventListener();

class LightDarkMode {
    constructor() {
        
    }
}