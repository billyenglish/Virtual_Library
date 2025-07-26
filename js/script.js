class MyLibrary {
    constructor() {
        this.library = [];
    }

    getMyLibrary(book) {
        this.library.push(book);
        return this.library;
    }
}

class BookForm {
    constructor(title, author, genre, pages) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
        this.read = false;
        this.bookId = crypto.randomUUID();
    }

    getBookTitle() {
        return this.title;
    }

    getBookAuthor() {
        return this.author;
    }

    getBookGenre() {
        return this.genre;
    }

    getBookPages() {
        return this.pages;
    }

    getReadStatus() {
        return this.read;
    }

    getBookId() {
        return this.bookId;
    }

    getBook() {
        return {
            title: this.title,
            author: this.author,
            genre: this.genre,
            pages: this.pages,
            read: this.read,
            bookId: this.bookId,
        }
    }

}

class ValidateBook {
    constructor(BookForm) {
        this.book = BookForm;
        this.errors = [];
    }


}

let book = new BookForm('The Hobbit', 'J.K Rawlings', 'Fiction', 229, false);
console.log(book.getBook());

// DOM Logic for UI Interactivity.

class DialogModal {
    constructor() {
        this.dialogModal = document.querySelector('dialog');
        this.closeModal = document.querySelector('#close_form_button');
        this.openModal = document.querySelector('#create_book_button');

        this.addEventListeners();
    }

    addEventListeners() {

        this.openModal.addEventListener('click', () => {
            this.dialogModal.showModal();
        })

        this.closeModal.addEventListener('click', () => {
            this.dialogModal.close();
        });

    }
}

let dialogController = new DialogModal();
