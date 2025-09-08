class Book {
    constructor(title, author, genre, pages, cover, read) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
        this.cover = cover;
        this.read = read;
        this.id = crypto.randomUUID();
    }

    toggleRead() {
        return this.read != this.read;
    }
}

class MyLibrary {
    constructor() {
        this.library = [];
    }

    getLibrary() {
        return this.library;
    }
}

class AddToLibrary {
    constructor () {
        this.currentLibrary = new MyLibrary;
    }

    getBookInfo(title, author, genre, pages, cover = '', read) {
        const myLibrary = this.currentLibrary.getLibrary();

        if (title && author && genre && pages > 0) {
                const bookExist = myLibrary.some(currentBooks =>
                currentBooks.title === title &&
                currentBooks.author === author
            );
            if (!bookExist) {
                const newBook = new Book(title, author, genre, pages, cover, read);
                myLibrary.push(newBook);
                return myLibrary;
            } else {
                return 'Title'
            }
        } else {
            return "Please Fill Out All Required Fields!"
        }
    }

    getLibrary() {
        const currentLibrary = this.currentLibrary.getLibrary();
        return currentLibrary;
    }
 }

class BookForm {
    constructor() {
        this.title = document.querySelector('#book_title').value;
        this.author = document.querySelector('#book_author').value;
        this.genre = document.querySelector('#book_genre').value;
        this.pages = document.querySelector('#book_pages').value;
        this.cover = document.querySelector('#book_cover').value;
        this.progress = document.querySelector('#book_progress').value;
    }

    getBookFormValues() {
        return {
            title: this.title,
            author: this.author,
            genre: this.genre,
            pages: this.pages,
            cover: this.cover,
            progress: this.progress,
        }
    }
}

let book = new BookForm();
console.log(book);

class UIDialogModal {
    constructor() {
        this.addBookButton = document.querySelector('#add_book_btn');
        this.closeFormButton = document.querySelector('#close_form_btn');
        this.submitFormButton = document.querySelector('#book_form_submit');
        this.dialogModal = document.querySelector('#dialog');
    }

    addEventListener() {

        if (this.addBookButton) {
            this.addBookButton.addEventListener('click', () => {
                this.dialogModal.showModal();
             });
        }

        if (this.closeFormButton) {
            this.closeFormButton.addEventListener('click', () => {
                this.dialogModal.close();
            });
        }

        if (this.submitFormButton) {
            this.submitFormButton.addEventListener('click', () => {
                const bookForm = new BookForm();
                const bookValues = bookForm.getBookFormValues();
                const { title, author, genre, pages } = bookValues;
                console.log(title, author, genre, pages);
            })
        }
    }
}


let dialogModal = new UIDialogModal();
dialogModal.addEventListener();